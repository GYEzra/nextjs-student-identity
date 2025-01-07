import { nftMetaSchema, nftPropertiesSchema, nftSchema } from "@/lib/schemas";
import { z } from "zod";

export interface INftProperties {
  key: string;
  value: string;
}

export interface INftMeta {
  name: string;
  image: string;
  description: string;
  properties?: INftProperties[];
}

export interface INft {
  tokenId: number;
  price: number;
  owner: string;
  isListed: boolean;
  meta: INftMeta;
}

export interface IPreviewNftData {
  image: string;
  name: string;
  description: string;
  price: number;
}

export interface IPreviewNftState {
  data: IPreviewNftData;
  update(newData: Partial<IPreviewNftData>): void;
}

export type NftData = z.output<typeof nftSchema>;
export type NftMetaData = z.output<typeof nftMetaSchema>;
export type NftPropertiesData = z.output<typeof nftPropertiesSchema>;
