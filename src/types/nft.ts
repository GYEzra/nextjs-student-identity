export type WhoPayGasFee = "RECEIVER" | "SENDER" | "NONE";

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

export type MintNftData = {
  addressTo: string;
  tokenURI: string;
  price: number;
  isListed: boolean;
  whoPayGasFee: WhoPayGasFee;
};

export type NftMetaState = {
  nftMeta: NftMeta;
  setNftMeta: React.Dispatch<React.SetStateAction<NftMeta>>;
};

export type MintNftDataState = {
  mintNftData: MintNftData;
  setMintNftData: React.Dispatch<React.SetStateAction<MintNftData>>;
};

export type MintNftState = {} & MintNftDataState & NftMetaState;
