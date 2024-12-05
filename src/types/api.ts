export interface ResponseData<T> {
  EC: number;
  data?: T;
  error?: string;
}
