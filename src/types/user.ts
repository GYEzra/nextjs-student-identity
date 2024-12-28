export enum AccountType {
  Personal = "Personal",
  Organizational = "Organizational",
}
export type RoleType = "ADMIN" | "USER";

export type UserM = {
  _id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  role: RoleType;
  accountType: AccountType;
  createdAt: Date;
};

export type Organizational = {
  adddress?: string;
  establish_license?: string;
  operate_license?: string;
} & UserM;

export type Personal = {
  phone?: string;
  identity_card?: string;
} & UserM;
