import { MintNftData, MintNftState, NftMeta } from "@/types/nft";

export const createDefaultMintNftData = (): MintNftData => {
  return {
    addressTo: "",
    tokenURI: "",
    price: 0,
    isListed: false,
    whoPayGasFee: "NONE",
  };
};

export const createDefaultNftMeta = (): NftMeta => {
  return {
    name: "",
    image: "",
    description: "",
    properties: [],
  };
};

export const createDefaultMintNftState = (): MintNftState => {
  return {
    mintNftData: createDefaultMintNftData(),
    setMintNftData: () => {},
    nftMeta: createDefaultNftMeta(),
    setNftMeta: () => {},
  };
};
