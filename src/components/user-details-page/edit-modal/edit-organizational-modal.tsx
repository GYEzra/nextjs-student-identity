import { Button, InputValidator, TextAreaValidator } from "@/components/ui";
import { updateUser } from "@/lib/api/user";
import { updateOrganizationalSchema } from "@/lib/schemas/update-user-schema";
import { UpdateOrganizationalData, UpdatePersonalData } from "@/types/schemas";
import { AccountType, Organizational } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type EditOrganizationalModalProps = {
  user: Organizational;
  setUser: Dispatch<Organizational>;
  toogleOpenEditModal: () => void;
};

const EditOrganizationalModal = ({ user, setUser, toogleOpenEditModal }: EditOrganizationalModalProps) => {
  const { update } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateOrganizationalData>({
    resolver: zodResolver(updateOrganizationalSchema),
    defaultValues: {
      name: user.name,
      bio: user.bio as string,
      adddress: user.adddress as string,
      establish_license: user.establish_license as string,
      operate_license: user.operate_license as string,
    },
  });

  const onSubmit = handleSubmit(async (data: UpdateOrganizationalData) => {
    try {
      const promise = updateUser(user._id, data, AccountType.Organizational).then(() => update({ user: { name: data.name } }));
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
    <div className="flex flex-col gap-4 py-2">
      <form onSubmit={onSubmit} className="text-black flex flex-col gap-4">
        <legend className="font-bold text-black text-2xl">Personal Detail</legend>
        <fieldset>
          <InputValidator required label="Name" type="text" name="name" register={register} errors={errors} />
          <TextAreaValidator label="Bio" name="bio" register={register} errors={errors} />
          <InputValidator label="Location" type="text" name="adddress" register={register} errors={errors} />
          <InputValidator label="Establish License" type="text" name="establish_license" register={register} errors={errors} />
          <InputValidator label="Operate License" type="text" name="operate_license" register={register} errors={errors} />
        </fieldset>
        <Button type="submit" value="Save changes" className="btn bg-green-700 text-base text-white" />
      </form>
    </div>
  );
};

export default EditOrganizationalModal;
