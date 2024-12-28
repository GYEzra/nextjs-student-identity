export interface NftProperties {
  key: string;
  value: string;
}

export interface NftMeta {
  name: string;
  image: string;
  description: string;
  properties?: NftProperties[];
}

export interface Nft {
  tokenId: number;
  price: number;
  owner: string;
  isListed: boolean;
  meta: NftMeta;
}

export interface PreviewNftData {
  image: string;
  name: string;
  description: string;
  price: number;
}

export interface PreviewNftState {
  data: PreviewNftData;
  update(newData: Partial<PreviewNftData>): void;
}
