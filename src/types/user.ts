export type UserM = {
  _id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
};

export type Organizational = {
  adddress: string;
  establish_license: string;
  operate_license: string;
} & UserM;

export type Personal = {
  phone: string;
  identity_card: string;
} & UserM;
