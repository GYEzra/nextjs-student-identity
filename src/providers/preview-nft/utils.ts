import { IPreviewNftData, IPreviewNftState } from "@/types/nft";

export const createDefaultPreviewNftData = (): IPreviewNftData => {
  return {
    name: "",
    description: "",
    image: "",
    price: 0,
    properties: [],
  };
};

export const createDefaultPreviewNftState = (): IPreviewNftState => {
  return {
    data: createDefaultPreviewNftData(),
    update: () => {},
  };
};
