"use client";
import { useWeb3 } from "@/providers/web3";
import { getSignedData, uploadNftImage, uploadNftMeta, verifySignature } from "@/lib/nft";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { InputValidator, TextAreaValidator } from "@/components/ui";
import { nftMetaSchema } from "@/lib/schemas";
import z from "zod";
import { usePreviewNft } from "@/providers/preview-nft";
import { useFieldArray, useForm } from "react-hook-form";
import { getPinataCid } from "@/utils";

type UploadNftMetaProps = {
    setTokenURI: React.Dispatch<React.SetStateAction<string | undefined>>;
}

type FormValue = z.infer<typeof nftMetaSchema>;

const UploadNftMetaForm: React.FC<UploadNftMetaProps> = ({ setTokenURI }) => {
    const { ethereum } = useWeb3();
    const { data: previewNftData, update } = usePreviewNft();
    const { register, control, handleSubmit, trigger, watch, formState: { errors } } = useForm<FormValue>({
        resolver: zodResolver(nftMetaSchema)
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "properties",
    });

    const onSubmit = handleSubmit(async (data) => {
        try {
            await handleVerifySignature();

            const uploadMetaPromise = uploadNftMeta({
                ...data,
                image: previewNftData.image,
            });

            const uploadMetaRes = await toast.promise(uploadMetaPromise, {
                pending: 'Waiting for uploading metadata',
                success: 'Successfully uploaded metadata',
            })

            setTokenURI(getPinataCid(uploadMetaRes.IpfsHash));
        } catch (error: any) {
            toast.error(error.message);
        }
    })

    const uploadImage = async () => {
        try {
            const isValidImage = await trigger('image');

            if (isValidImage) {
                await handleVerifySignature();

                const files = watch('image');
                const formData = new FormData();

                formData.append("file", files[0]);

                const uploadImagePromise = uploadNftImage(formData);
                const uploadImageRes = await toast.promise(uploadImagePromise, {
                    pending: 'Waiting for uploading image',
                    success: 'Successfully uploaded image',
                })

                update({ image: uploadImageRes.IpfsHash });
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        update({ [name]: value });
    }

    const handleVerifySignature = async () => {
        const signedDataRes = await getSignedData(ethereum!);
        const verifySignaturePromise = verifySignature(signedDataRes!.signedData, signedDataRes.account);

        await toast.promise(verifySignaturePromise, {
            pending: 'Verifying signature',
            success: 'Signature verified successfully',
            error: 'Failed to verify signature',
        })
    }

    return (
        <form className="mx-0 my-auto" onSubmit={onSubmit}>
            <div className="p-4">
                <div>
                    <InputValidator label="Picture" type="file" name="image" register={register} errors={errors} className="file-input file-input-bordered w-full" onChange={uploadImage} />
                </div>
                <div className="mt-3">
                    <InputValidator label="NFT Name" type="text" name="name" placeholder="Please enter the name of the NFT" register={register} errors={errors} onChange={handleChange} />
                </div>
                <div className="mt-3">
                    <TextAreaValidator label="NFT Description" name="description" placeholder="Enter a description of the NFT" register={register} errors={errors} onChange={handleChange} />
                </div>
                <div className="mt-3">
                    <label htmlFor="external" className="block text-md font-medium leading-6 text-neutral-400">
                        Properties
                    </label>
                    {fields?.map((property, index) => {
                        return (
                            <div key={index} className="mt-2 flex gap-4">
                                <InputValidator type="text" name={`properties.${index}.key`} placeholder="Key" register={register} errors={errors} />
                                <InputValidator type="text" name={`properties.${index}.value`} placeholder="Value" register={register} errors={errors} />
                                <button type="button" onClick={() => remove(index)}>
                                    <XMarkIcon width={20} className="text-red-700" />
                                </button>
                            </div>
                        )
                    })}

                    <button type="button" className="btn btn-sm btn-outline rounded-full mt-4 text-white" onClick={() => append({ key: '', value: '' })}>
                        <PlusIcon className="w-5 text-green-500" /> Thêm
                    </button>
                </div>
            </div>
            <div className="px-4 pb-4 pt-2 flex gap-10 justify-center">
                <button type="submit" className="special-button">
                    Tiếp tục
                </button>
            </div>
        </form>
    )
}

export default UploadNftMetaForm;