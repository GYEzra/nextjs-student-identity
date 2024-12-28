export type EC = 0 | -1; // 0 for success, -1 for error

export interface ResponseData<T> {
  EC: EC;
  data?: T;
  error?: string;
}

export interface PinataRes {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  isDuplicate: boolean;
}
