export interface IPinataRes {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  isDuplicate: boolean;
}

export interface ISignUpRes {
  _id: string;
}

export interface IVerifyRes {
  isBeforeCheck: boolean;
}
