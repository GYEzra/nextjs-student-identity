"use client";

import { PreviewNftData, PreviewNftState } from "@/types/nft";
import { createContext, useContext, useEffect, useState } from "react";
import { createDefaultPreviewNftData, createDefaultPreviewNftState } from "./utils";

interface PreviewNftProviderProps {
    children: React.ReactNode;
}

const PreviewNftContext = createContext<PreviewNftState>(createDefaultPreviewNftState());

const PreviewNftProvider: React.FC<PreviewNftProviderProps> = ({ children }) => {
    const [data, setData] = useState<PreviewNftData>(createDefaultPreviewNftData());

    const update = (newData: Partial<PreviewNftData>) => {
        setData((prevData) => ({ ...prevData, ...newData }));
    }

    return (
        <PreviewNftContext.Provider value={{ data, update }}>
            {children}
        </PreviewNftContext.Provider>
    )
}

export const usePreviewNft = () => {
    return useContext(PreviewNftContext);
}

export default PreviewNftProvider;