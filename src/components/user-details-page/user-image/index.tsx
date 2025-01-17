import { Button, InputValidator, Modal, UserAvatar } from "@/components/ui";
import { uploadFile } from "@/lib/api/file";
import { updateUser } from "@/lib/api/user";
import { uploadImageSchema } from "@/lib/schemas/upload-image-schema";
import { UploadImageData } from "@/types/schemas";
import { Organizational, Personal } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCamera, FaInfoCircle } from "react-icons/fa";
import { toast } from "react-toastify";

type UserImageProps = {
  user: Personal | Organizational;
  setUser: Dispatch<Personal | Organizational>;
};

const UserImage = ({ user, setUser }: UserImageProps) => {
  const { update } = useSession();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadImageData>({
    resolver: zodResolver(uploadImageSchema),
  });

  const uploadImage = async (image: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", image);

    const response = await uploadFile(formData);
    return response.filename;
  };

  const onSubmit = handleSubmit(async (data: UploadImageData) => {
    try {
      const fileName = await uploadImage(data.images[0]);
      const updateUserPromise = updateUser(user._id, { image: fileName }, user.accountType);

      await toast.promise(updateUserPromise, {
        pending: "Processing uploaded image",
        success: "Uploaded image successfully",
      });

      setUser({ ...user, image: fileName });
      update({ user: { image: fileName } });
      toogleModal();
    } catch (error: any) {
      toast.error(error.message);
    }
  });

  const toogleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      <div className="flex flex-col border border-zinc-400 rounded-lg">
        <div className="flex gap-1 items-center p-4 border-b border-zinc-500">
          <p className="font-bold">Profile Image</p>
          <FaInfoCircle />
        </div>
        <div className="p-4 flex justify-center relative">
          <div className="absolute top-2/3 right-20 lg:top-2/3 lg:right-16 p-2">
            {" "}
            <div className="tooltip bg-green-500 rounded-full p-3" data-tip="Change profile image">
              <FaCamera className="size-5 cursor-pointer" onClick={toogleModal} />
            </div>
          </div>
          <UserAvatar image={user.image} name={user.name} />
        </div>
      </div>
      <Modal isOpen={isOpenModal} onClose={toogleModal}>
        <form onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6 text-black">File Upload</h2>
          <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-8 text-center mb-6">
            <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
            </svg>
            <InputValidator type="file" name="images" className="file-input file-input-bordered file-input-success w-full text-black" register={register} errors={errors} />
          </div>
          <Button type="submit" value="Upload" />
        </form>
      </Modal>
    </>
  );
};

export default UserImage;
