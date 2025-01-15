export {};

declare global {
  interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }

  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface IModelPaginate<T> {
    meta: {
      page: number;
      limit: number;
      totalPages: number;
      totalItems: number;
    };
    data: T;
  }

  interface ILogin {
    user: {
      _id: string;
      name: string;
      email: string;
      accountType: string;
      image?: string;
      walletAddress?: string;
    };
    access_token: string;
    expiresIn: Date;
  }
}
