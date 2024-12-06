import { BrowserProvider } from "ethers";
import { Contract, ethers } from "ethers";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const loadContract = async (provider: BrowserProvider, contractName: string): Promise<Contract> => {
  try {
    const res = await fetch(__dirname + `contracts/${contractName}.json`);
    const Artifact = await res.json();

    const contract = new ethers.Contract(Artifact.address, Artifact.abi, provider);
    return contract;
  } catch (error: any) {
    console.error("Error loading contract:", error.message);
    return Promise.reject("Không tìm thấy thấy địa chỉ của hợp đồng");
  }
};
