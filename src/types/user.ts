export type AccountType = "PERSONAL" | "ORGANIZATIONAL";
export type RoleType = "ADMIN" | "USER";

export type UserM = {
  _id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  role: RoleType;
  accountType: AccountType;
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
