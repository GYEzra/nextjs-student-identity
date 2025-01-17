import { AddressLike, ethers } from "ethers";
import moment from "moment";
import { BACKEND_URL, PINATA_DOMAIN } from "./api";
import { toast, ToastPromiseParams } from "react-toastify";

export const DEFAULT_ETH_ADDRESS = "0x0000000000000000000000000000000000000000";
export const imageLoader = ({ src }: { src: string }) => `${BACKEND_URL}/images/${src}`;
export const getServerUrl = (src: string): string => `${BACKEND_URL}/${src}`;
export const getPinataCid = (cid: string): string => `${PINATA_DOMAIN}/ipfs/${cid}`;

export const formatEthAddress = (address: string): string => {
  const formatStr = address.substring(0, 7) + "..." + address.substring(address.length - 5);
  return formatStr;
};

export const convertToAddressLike = (address: string): AddressLike => {
  const ethAddress = ethers.getAddress(address) as AddressLike;
  return ethAddress;
};

export const formatDate = (date: Date): string => {
  const formattedDate = moment(date).utc().format("DD/MM/YYYY");
  return formattedDate;
};

export const formatEthNumber = (number: number, fixed: number): number => {
  const formattedNumber = parseFloat(number.toFixed(fixed));
  return formattedNumber;
};

export const formatShortEthAddress = (address: string): string => {
  return `${address.substring(0, 7)}...${address.substring(address.length - 5)}`;
};

export const formatNftListedStatus = (isListed: boolean): string => {
  return isListed ? "On Sale" : "Off Sale";
};

export const createFormData = <T extends Record<string, any>>(data: T): FormData => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};
