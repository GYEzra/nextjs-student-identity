export interface ISigned {
  id: string;
  timestamp: Date;
}

export interface IMessageResponse {
  message: string;
}

export interface IPinata {
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
