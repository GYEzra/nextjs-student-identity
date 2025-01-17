import { Organizational, Personal } from "@/types/user";
import { imageLoader } from "@/utils";
import Image from "next/image";
import AvatarPlaceholder from "../avatar-placeholder";

const UserAvatar = ({ image, name }: { image?: string; name: string }) => {
  if (image) return <Image loader={imageLoader} src={image} alt="Avatar User" width={1} height={1} className="rounded-full object-cover w-36 h-36 mx-auto" unoptimized />;
  return <AvatarPlaceholder placeholder={name[0]} />;
};

export default UserAvatar;
