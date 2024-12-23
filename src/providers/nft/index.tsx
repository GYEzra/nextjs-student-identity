"use client";

import { MintNftData, MintNftState, NftMeta } from "@/types/nft";
import { createContext, useContext, useState } from "react";
import { createDefaultMintNftData, createDefaultMintNftState, createDefaultNftMeta } from "./utils";

type MintNftDataProviderProps = {
    children: React.ReactNode;
}

const MintNftContext = createContext<MintNftState>(createDefaultMintNftState());

const MintNftProvider: React.FC<MintNftDataProviderProps> = ({ children }) => {
    const [mintNftData, setMintNftData] = useState<MintNftData>(createDefaultMintNftData());
    const [nftMeta, setNftMeta] = useState<NftMeta>(createDefaultNftMeta());

    return (
        <MintNftContext.Provider value={{
            mintNftData, setMintNftData, nftMeta, setNftMeta,
        }}>
            {children}
        </MintNftContext.Provider>
    );
}

export const useMintNft = () => {
    return useContext(MintNftContext);
}

export default MintNftProvider;