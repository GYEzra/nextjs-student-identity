import { IPreviewNftData, IPreviewNftState } from "@/types/nft";

export const createDefaultPreviewNftData = (): IPreviewNftData => {
  return {
    creator: "PixelPusher77",
    name: "Cosmic Wanderer",
    description: "A vibrant depiction of a lone traveler exploring the cosmos.  This NFT captures the spirit of adventure and the vast unknown.",
    image: "",
    price: 0.5,
    isListed: true,
    properties: [
      { key: "Background", value: "Nebula Purple" },
      { key: "Character", value: "Astronaut" },
      { key: "Accessory", value: "Jetpack" },
      { key: "Rarity", value: "Rare" },
    ],
  };
};

export const createDefaultPreviewNftState = (): IPreviewNftState => {
  return {
    data: createDefaultPreviewNftData(),
    update: () => { },
  };
};
