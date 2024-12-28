import { BrowserProvider, Contract, ethers } from "ethers";

export const loadContract = async (provider: BrowserProvider, contractName: string): Promise<Contract> => {
  try {
    const res = await fetch(__dirname + `contracts/${contractName}.json`);
    const Artifact = await res.json();

    const contract = new ethers.Contract(Artifact.address, Artifact.abi, provider);
    return contract;
  } catch (error: any) {
    throw new Error(`Error loading contract: ${error}`);
  }
};
