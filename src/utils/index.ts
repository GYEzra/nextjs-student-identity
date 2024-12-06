import moment from "moment";

export const formatEthAddress = (address: string): string => {
  const formatStr = address.substring(0, 7) + "..." + address.substring(address.length - 5);
  return formatStr;
};

export const formatDate = (date: Date): string => {
  const formattedDate = moment(date).utc().format("DD/MM/YY");
  return formattedDate;
};
