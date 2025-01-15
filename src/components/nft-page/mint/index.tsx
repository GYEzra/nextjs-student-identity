"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputValidator } from "@/components/ui";
import { ChangeEvent } from "react";
import { nftSchema } from "@/lib/schemas";
import { usePreviewNft } from "@/providers/preview-nft";
import { toast } from "react-toastify";
import { useWeb3 } from "@/providers/web3";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { DEFAULT_ETH_ADDRESS } from "@/utils";
import { NftData } from "@/types/nft";
import { useSession } from "next-auth/react";

type MintNftFormProps = {
  tokenURI?: string;
};

const MintNftForm: React.FC<MintNftFormProps> = ({ tokenURI }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { walletAddress } = session!.user;
  const { update } = usePreviewNft();
  const { contract } = useWeb3();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<NftData>({
    resolver: zodResolver(nftSchema),
    defaultValues: {
      tokenURI: tokenURI,
    },
  });

  const onSubmit = handleSubmit(async (data: NftData) => {
    try {
      const { addressTo, tokenURI, price, isListed } = data;
      const priceBn = ethers.parseEther(price.toString());

      const tx = await contract!.mint(addressTo, tokenURI, priceBn, isListed, { from: walletAddress });
      await toast.promise(tx.wait(), {
        pending: "Minting NFT",
      });

      router.push(`/`);
      toast.success("NFT minted successfully");
    } catch (error: any) {
      toast.error(error.reason || error.message);
    }
  });

  const toogleYourAddress = () => setValue("addressTo", watch("addressTo") === walletAddress ? DEFAULT_ETH_ADDRESS : walletAddress);

  const toogleListed = () => setValue("isListed", !watch("isListed"));

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    update({ [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden flex flex-col gap-2 my-4">
        <div>
          <label htmlFor="addressTo" className="block text-md font-medium leading-6 text-neutral-400">
            Token URI
          </label>
          <div className="mt-1">
            {tokenURI ? (
              <Link href={tokenURI} className="underline text-indigo-600">
                {tokenURI}
              </Link>
            ) : (
              <InputValidator type="text" name="tokenURI" placeholder="Please enter the recipient's Ethereum address" register={register} errors={errors} onChange={onChange} />
            )}
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-y-4 lg:gap-x-4 lg:justify-between lg:items-center">
          <div className="w-full lg:w-3/4 lg:flex-1">
            <InputValidator label="Address To" type="text" name="addressTo" placeholder="Please enter the recipient's Ethereum address" register={register} errors={errors} onChange={onChange} />
          </div>
          <div className="w-full lg:w-1/4">
            <button type="button" className="mt-2 px-2 py-1 text-sm btn btn-warning w-full" onClick={toogleYourAddress}>
              {watch("addressTo") === walletAddress ? "Clear Address" : "Use My Address"}
            </button>
          </div>
        </div>
        <div className="flex flex-nowrap">
          <InputValidator label="Price (ETH)" type="text" name="price" placeholder="Please enter price" register={register} errors={errors} onChange={onChange} />
        </div>
      </div>
      <div className="form-control">
        <label className="flex gap-x-2 flex-nowrap cursor-pointer text-md font-medium text-neutral-400">
          <span>Do you want the product to be listed on the floor?</span>
          <InputValidator type="checkbox" checked={true} readOnly name="isListed" className="toggle toggle-primary" register={register} errors={errors} onClick={toogleListed} />
        </label>
      </div>
      <div className="mt-4 px-4 py-3 sm:px-6 text-center">
        <button type="submit" className="special-button">
          Mint NFT
        </button>
      </div>
    </form>
  );
};

export default MintNftForm;
