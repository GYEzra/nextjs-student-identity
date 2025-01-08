import { IArtifact } from "@/types/web3";
import { BACKEND_URL, sendRequest } from "@/utils/api";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { BrowserProvider, InfuraProvider } from "ethers";

export const getArtifact = async (): Promise<IArtifact> => {
  const response = await sendRequest<IBackendRes<IArtifact>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/contract/artifact`,
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};

export const getProvider = (ethereum?: MetaMaskInpageProvider) => {
  if (ethereum) {
    return new BrowserProvider(ethereum);
  }

  return getInfuraProvider();
};

export const getInfuraProvider = async (): Promise<InfuraProvider> => {
  const response = await sendRequest<IBackendRes<InfuraProvider>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/contract/infura-provider`,
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};
