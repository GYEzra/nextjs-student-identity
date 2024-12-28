import { AddressLike, ethers } from "ethers";
import moment from "moment";
import { PINATA_DOMAIN } from "./api";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

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

export const displayPinataCID = (cid: string): string => {
  const pinataLink = `${PINATA_DOMAIN}/ipfs/${cid}`;
  return pinataLink;
};
