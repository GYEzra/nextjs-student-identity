"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createDefaultPreviewNftData, createDefaultPreviewNftState } from "./utils";
import { IPreviewNftData, IPreviewNftState } from "@/types/nft";

interface PreviewNftProviderProps {
  children: React.ReactNode;
}

const PreviewNftContext = createContext<IPreviewNftState>(createDefaultPreviewNftState());

const PreviewNftProvider: React.FC<PreviewNftProviderProps> = ({ children }) => {
  const [data, setData] = useState<IPreviewNftData>(createDefaultPreviewNftData());

  const update = (newData: Partial<IPreviewNftData>) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  return <PreviewNftContext.Provider value={{ data, update }}>{children}</PreviewNftContext.Provider>;
};

export const usePreviewNft = () => {
  return useContext(PreviewNftContext);
};

export default PreviewNftProvider;
