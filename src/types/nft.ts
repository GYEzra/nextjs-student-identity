export type NftProperties = {
  key: string;
  value: string;
};

export type NftMeta = {
  name: string;
  image: string;
  description: string;
  properties?: NftProperties[];
};

export type NftContract = {
  tokenId: number;
  price: number;
  owner: string;
  isListed: boolean;
};

export type Nft = {
  meta: NftMeta;
} & NftContract;

export type FileReq = {
  bytes: Uint8Array;
  contentType: string;
  fileName: string;
};

export type PinataRes = {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  isDuplicate: boolean;
};
