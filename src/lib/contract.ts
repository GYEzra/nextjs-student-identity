import { NftMarketplace } from "@/types/contract-type";
import { MintNftData } from "@/types/nft";
import { BrowserProvider, Contract, ethers } from "ethers";

export const loadContract = async (provider: BrowserProvider, contractName: string): Promise<Contract> => {
  try {
    const res = await fetch(__dirname + `contracts/${contractName}.json`);
    const Artifact = await res.json();

    const contract = new ethers.Contract(Artifact.address, Artifact.abi, provider);
    return contract;
  } catch (error: any) {
    // Handle error fetch contract json with status 200
    throw new Error(`Error loading contract: ${error}`);
  }
};

export const mintNft = async (contract: NftMarketplace, mintNft: MintNftData) => {
  const { addressTo, tokenURI, price, isListed } = mintNft;
  const nft = await contract.mint(addressTo, tokenURI, price, isListed);
};
