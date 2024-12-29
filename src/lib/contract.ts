import { MetaMaskInpageProvider } from "@metamask/providers";
import { BrowserProvider, Contract, ethers, InfuraProvider } from "ethers";

export const loadContract = async (provider: BrowserProvider | InfuraProvider, contractName: string): Promise<Contract> => {
  try {
    const res = await fetch(__dirname + `contracts/${contractName}.json`);
    const Artifact = await res.json();

    const contract = new ethers.Contract(Artifact.address, Artifact.abi, provider);
    return contract;
  } catch (error: any) {
    throw new Error(`Error loading contract: ${error}`);
  }
};

export const getProvider = (ethereum?: MetaMaskInpageProvider) => {
  if (ethereum) {
    return new BrowserProvider(ethereum);
  }

  return getInfuraProvider();
};

export const getInfuraProvider = () => {
  const network = process.env.NEXT_PUBLIC_INFURA_NETWORK;
  const secretKey = process.env.NEXT_PUBLIC_INFURA_SECRET;
  const provider = new ethers.InfuraProvider(network, secretKey);
  return provider;
};
