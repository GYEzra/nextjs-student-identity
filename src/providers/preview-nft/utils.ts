import { PreviewNftData, PreviewNftState } from "@/types/nft";

export const createDefaultPreviewNftData = (): PreviewNftData => {
  return {
    name: "",
    description: "",
    image: "",
    price: 0,
  };
};

export const createDefaultPreviewNftState = (): PreviewNftState => {
  return {
    data: createDefaultPreviewNftData(),
    update: () => {},
  };
};
