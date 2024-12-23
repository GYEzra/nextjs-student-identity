import { useMintNft } from "@/providers/nft";
import { useWeb3 } from "@/providers/web3";
import { getSignedData, uploadNftImage, uploadNftMeta, verifySignature } from "@/lib/nft";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { ChangeEvent } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { InputValidator, TextAreaValidator } from "@/components/ui";
import { IMAGE_SCHEMA } from "@/lib/schemas";

type UploadNftMetaProps = {
    setIsTokenURI: React.Dispatch<React.SetStateAction<boolean>>;
}

const propertiesSchema = z.object({
    key: z.string({ invalid_type_error: 'Key must be a string' }).min(1, { message: 'Key is required' }),
    value: z.string({ invalid_type_error: 'Value must be a string' }).min(1, { message: 'Value is required' }),
})

const schema = z.object({
    name: z.string({ invalid_type_error: 'Name must be a string' }).min(1, { message: 'Name is required' }),
    description: z.string({ invalid_type_error: 'Description must be a string' }).min(1, { message: 'Description is required' }),
    image: z.string(),
    properties: z.array(propertiesSchema)
});

const UploadNftMetaForm: React.FC<UploadNftMetaProps> = ({ setIsTokenURI }) => {
    const { data: session } = useSession();
    const { nftMeta, setNftMeta, mintNftData, setMintNftData } = useMintNft();
    const { ethereum } = useWeb3();

    const accessToken = session?.access_token!;

    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: nftMeta,
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "properties",
    });

    const onSubmit = (data: any) => {
        console.log("Check values: ", data);
    }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNftMeta({ ...nftMeta, [name]: value });
    }

    const handleVerifySignature = async () => {
        const signedData = await getSignedData(ethereum!, accessToken);

        if (signedData.EC != 0) {
            toast.error(signedData.error);
            throw new Error("Failed to signed signature");
        }

        const verifyData = await verifySignature(signedData.data!.signedData, signedData.data!.account, accessToken);

        if (verifyData.EC != 0) {
            toast.error(verifyData.error);
            throw new Error("Failed to verify signature");
        }
    }

    const uploadMetadata = async () => {
        await handleVerifySignature();

        const promise = uploadNftMeta(nftMeta, accessToken);

        const res = await toast.promise(promise, {
            pending: "Đang tải thông tin NFT",
        })

        if (res.EC === 0) {
            const data = res.data;
            toast.success("Successfully uploaded metadata");
            setIsTokenURI(true);
            setMintNftData({ ...mintNftData, tokenURI: data!.IpfsHash });
        } else {
            toast.error(res.error);
            throw new Error("Failed to upload metadata");
        }
    }

    const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) {
            toast.warn("Provide a valid image file");
            return;
        }

        await handleVerifySignature();

        const formData = new FormData();
        formData.append("file", file);

        const promise = uploadNftImage(formData, accessToken);
        const res = await toast.promise(promise, {
            pending: 'Waiting for uploading image',
        })

        if (res.EC === 0) {
            setNftMeta({ ...nftMeta, image: res.data!.IpfsHash });
            toast.success("Image uploaded successfully");
        } else {
            toast.error(res.error);
            throw new Error("Failed to upload image");
        }
    }

    return (
        <form className="mx-0 my-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4">
                <div>
                    <InputValidator label="Picture" type="file" name="image" register={register} errors={errors} className="file-input file-input-bordered w-full" onChange={uploadImage} />
                </div>
                <div className="mt-3">
                    <InputValidator label="NFT Name" type="text" name="name" placeholder="Please enter the name of the NFT" register={register} errors={errors} onChange={onChange} />
                </div>
                <div className="mt-3">
                    <TextAreaValidator label="NFT Description" name="description" placeholder="Enter a description of the NFT" register={register} errors={errors} onChange={onChange} />
                </div>
                <div className="mt-3">
                    <label htmlFor="external" className="block text-md font-medium leading-6 text-neutral-400">
                        Properties
                    </label>
                    {fields?.map((property, index) => {
                        return (
                            <div key={index} className="mt-2 flex gap-4">
                                <InputValidator type="text" name={`properties.${index}.key`} placeholder="Key" register={register} errors={errors} onChange={onChange} />
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