"use client";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { InputValidator, TextAreaValidator } from "@/components/ui";
import { usePreviewNft } from "@/providers/preview-nft";
import { useFieldArray, useForm } from "react-hook-form";
import { uploadNftImage, uploadNftMeta } from "@/lib/api/nft";
import { getPinataCid } from "@/utils";
import { nftMetaSchema } from "@/lib/schemas";
import { handleVerifySignature } from "@/helpers/signature";
import { NftMetaData } from "@/types/schemas";
import { useWeb3 } from "@/providers/web3";
import { useSession } from "next-auth/react";

type UploadNftMetaProps = {
  setTokenURI: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const UploadNftMetaForm: React.FC<UploadNftMetaProps> = ({ setTokenURI }) => {
  const { ethereum } = useWeb3();
  const { data: session } = useSession();
  const { data: previewNftData, update } = usePreviewNft();
  const {
    register,
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<NftMetaData>({
    resolver: zodResolver(nftMetaSchema),
    defaultValues: {
      name: previewNftData.name,
      image: previewNftData.image,
      description: previewNftData.description,
      properties: previewNftData.properties
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "properties",
  });

  const onSubmit = handleSubmit(async (data: NftMetaData) => {
    try {
      const uploadMetaPromise = uploadNftMeta({
        ...data,
        image: previewNftData.image,
      });

      const uploadMetaRes = await toast.promise(uploadMetaPromise, {
        pending: "Waiting for uploading metadata",
        success: "Successfully uploaded metadata",
      });

      setTokenURI(getPinataCid(uploadMetaRes.IpfsHash));
    } catch (error: any) {
      toast.error(error.message);
    }
  });

  const onUploadImage = async () => {
    try {
      const isValidImage = await trigger("image");

      if (isValidImage) {
        await handleVerifySignature(ethereum!, session!.access_token);

        const files = watch("image");
        const formData = new FormData();

        formData.append("file", files[0]);

        const uploadImagePromise = uploadNftImage(formData);
        const uploadImageResponse = await toast.promise(uploadImagePromise, {
          pending: "Waiting for uploading image...",
        });

        update({ image: uploadImageResponse.IpfsHash });
        toast.success("Image uploaded successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const nameStrings = name.split('.');

    if (nameStrings.length === 1)
      update({ [name]: value });
    else {
      const index = Number(nameStrings[1]);
      const label = nameStrings[2];

      const properties = previewNftData.properties!;
      properties[index] = {
        ...properties[index],
        [label]: value
      };

      update({ properties: properties });
    }
  };

  const onAddProperty = () => {
    const property = { key: "", value: "" };
    append(property);
    previewNftData.properties?.push(property);
    update({ properties: previewNftData.properties });
  }

  const onRemoveProperty = (index: number) => {
    remove(index);
    previewNftData.properties?.splice(index, 1);
    update({ properties: previewNftData.properties });
  }

  return (
    <form className="mx-0 my-auto" onSubmit={onSubmit}>
      <div className="p-4">
        <div>
          <InputValidator label="Picture" type="file" name="image" register={register} errors={errors} className="file-input file-input-bordered w-full" onChange={onUploadImage} />
        </div>
        <div className="mt-3">
          <InputValidator label="NFT Name" type="text" name="name" placeholder="Please enter the name of the NFT" register={register} errors={errors} onChange={onChangeValue} />
        </div>
        <div className="mt-3">
          <TextAreaValidator label="NFT Description" name="description" placeholder="Enter a description of the NFT" register={register} errors={errors} onChange={onChangeValue} />
        </div>
        <div className="mt-3">
          <label htmlFor="external" className="block text-md font-medium leading-6 text-neutral-400">
            Properties
          </label>
          {fields?.map((property, index) => {
            return (
              <div key={index} className="mt-2 flex gap-4">
                <InputValidator type="text" name={`properties.${index}.key`} placeholder="Key" register={register} errors={errors} onChange={onChangeValue} />
                <InputValidator type="text" name={`properties.${index}.value`} placeholder="Value" register={register} errors={errors} onChange={onChangeValue} />
                <button type="button" onClick={() => onRemoveProperty(index)}>
                  <XMarkIcon width={20} className="text-red-700" />
                </button>
              </div>
            );
          })}

          <button type="button" className="btn btn-sm btn-outline rounded-full mt-4 text-white" onClick={() => onAddProperty()}>
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
  );
};

export default UploadNftMetaForm;
