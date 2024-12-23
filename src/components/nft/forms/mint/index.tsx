import { displayPinataCID } from "@/utils/web3";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { InputValidator } from "@/components/ui";
import { ChangeEvent } from "react";
import { useMintNft } from "@/providers/nft";
import { useAccount } from "@/hooks/web3";

const MintNftForm = () => {
    const schema = z.object({
        tokenURI: z.string({ invalid_type_error: 'Token URI must be a string' }).min(1, { message: 'Token URI is required' }).url({ message: 'Invalid URL' }),
        addressTo: z.string()
            .length(42, { message: 'Invalid Ethereum address' }),
        price: z.string().min(1, { message: 'Price is required' }).pipe(z.number({ coerce: true, invalid_type_error: 'Price is invalid' }).finite().gte(0, { message: 'Price must be a positive number' }),),
    });

    const { account } = useAccount();
    const { mintNftData, setMintNftData } = useMintNft();

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const toogleYourAddress = () => {
        const currentAddress = watch('addressTo');
        setValue('addressTo', currentAddress === account.data ? "" : account.data);
    }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setMintNftData({ ...mintNftData, [name]: value });
    }

    const onSubmit = async () => {
        const values = watch();
        console.log("Check values: ", values);
        console.log("Check Errors: ", errors);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow sm:rounded-md sm:overflow-hidden flex flex-col gap-2 my-4">
                <div>
                    <label htmlFor="addressTo" className="block text-md font-medium leading-6 text-neutral-400">
                        Token URI
                    </label>
                    <div className="mt-1">
                        {
                            mintNftData.tokenURI
                                ? <Link href={displayPinataCID(mintNftData.tokenURI)} className="underline text-indigo-600">
                                    {displayPinataCID(mintNftData.tokenURI)}
                                </Link>
                                : <InputValidator type="text" name="tokenURI" placeholder="Please enter the recipient's Ethereum address" register={register} errors={errors} onChange={onChange} />
                        }

                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-y-4 lg:gap-x-4 lg:justify-between lg:items-center">
                    <div className="w-full lg:w-3/4 lg:flex-1">
                        <InputValidator label="Address To" type="text" name="addressTo" placeholder="Please enter the recipient's Ethereum address" register={register} errors={errors} onChange={onChange} />
                    </div>
                    <div className="w-full lg:w-1/4">
                        <button type="button" className="mt-2 px-2 py-1 text-sm btn btn-warning w-full" onClick={toogleYourAddress}>
                            {watch('addressTo') === account.data ? "Clear Address" : "Use My Address"}
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
                    <input type="checkbox" defaultChecked={mintNftData.isListed} checked className="toggle toggle-primary" onClick={() => mintNftData.isListed = !(mintNftData.isListed)} onChange={e => { }} />
                </label>
            </div>
            <div className="mt-4 px-4 py-3 sm:px-6 text-center">
                <button
                    type="submit"
                    className="special-button"
                >
                    Mint NFT
                </button>
            </div>
        </form>
    )
}

export default MintNftForm;