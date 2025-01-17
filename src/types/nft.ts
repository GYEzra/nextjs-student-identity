import { IUser } from "./next-auth";

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
  owner: IUser;
  isListed: boolean;
  meta: INftMeta;
}

export type IPreviewNftData = INftMeta & Pick<INft, "price">;

export interface IPreviewNftState {
  data: IPreviewNftData;
  update(newData: Partial<IPreviewNftData>): void;
}
