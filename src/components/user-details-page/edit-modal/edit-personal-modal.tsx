import { reloadSession } from "@/auth";
import { Button, InputValidator, Modal, TextAreaValidator } from "@/components/ui";
import { updateUser } from "@/lib/api/user";
import { updatePersonalSchema } from "@/lib/schemas/update-user-schema";
import { UpdatePersonalData } from "@/types/schemas";
import { AccountType, Personal } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type EditPersonalModalProps = {
  user: Personal;
  setUser: Dispatch<Personal>;
  toogleOpenEditModal: () => void;
};

const EditPersonalModal = ({ user, setUser, toogleOpenEditModal }: EditPersonalModalProps) => {
  const { update } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePersonalData>({
    resolver: zodResolver(updatePersonalSchema),
    defaultValues: {
      name: user.name,
      bio: user.bio as string,
      identity_card: user.identity_card as string,
      phone: user.phone as string,
    },
  });

  const onSubmit = handleSubmit(async (data: UpdatePersonalData) => {
    try {
      const promise = updateUser(user._id, data, AccountType.Personal).then(() => update({ user: { name: data.name } }));
      await toast.promise(promise, {
        pending: "Processing update...",
        success: "Updated Successfully",
      });

      setUser({ ...user, ...data });
      toogleOpenEditModal();
    } catch (error: any) {
      toast.error(error.message);
    }
  });

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={onSubmit} className="text-black flex flex-col gap-4">
        <legend className="font-bold text-black text-2xl">Personal Detail</legend>
        <fieldset>
          <InputValidator required label="Name" type="text" name="name" register={register} errors={errors} />
          <TextAreaValidator label="Bio" name="bio" register={register} errors={errors} />
          <InputValidator label="Phone" type="text" name="phone" register={register} errors={errors} />
          <InputValidator label="Identity Card" type="text" name="identity_card" register={register} errors={errors} />
        </fieldset>
        <Button type="submit" value="Save changes" className="btn bg-green-700 text-base text-white" onClick={reloadSession} />
      </form>
    </div>
  );
};

export default EditPersonalModal;
