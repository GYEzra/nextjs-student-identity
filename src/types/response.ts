export interface IPaginate<T> {
  meta: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
  data: T;
}

export interface ISigned {
  id: string;
  timestamp: Date;
}

export interface IVerifySignature {
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
