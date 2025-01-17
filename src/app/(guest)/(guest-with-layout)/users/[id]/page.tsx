"use client";
import { FaCamera, FaEdit, FaInfoCircle } from "react-icons/fa";
import { EditOrganizationalModal, EditPersonalModal, OrganizationalDetails, PersonalDetails, UserImage, UserBalance } from "@/components/user-details-page";
import { findUserById } from "@/lib/api/user";
import { useEffect, useState } from "react";
import { useHasMounted } from "@/hooks/custom";
import { AccountType, Organizational, Personal } from "@/types/user";
import { useRouter } from "next/navigation";
import { Button, Modal } from "@/components/ui";
import { DEFAULT_ETH_ADDRESS, formatDate } from "@/utils";

const UserDetailsPage = ({ params }: { params: { id: string } }) => {
  const hasMounted = useHasMounted();
  const id = params.id;
  const router = useRouter();
  const [user, setUser] = useState<Personal | Organizational>();
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const fetchUserDetails = async () => {
    try {
      const user = await findUserById(id);
      setUser(user);
    } catch (error) {
      router.replace("/404");
    }
  };

  const toogleOpenEditModal = () => setIsOpenEditModal(!isOpenEditModal);

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  if (!hasMounted || !user) return null;

  return (
    <div className="w-11/12 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/4 flex flex-col gap-6 text-white">
        <UserImage user={user} setUser={setUser} />
        <div className="flex flex-col border border-zinc-400 rounded-lg">
          <div className="flex gap-1 items-center p-2 border-b border-zinc-500">
            <p className="font-bold">Profile Banner </p>
            <FaInfoCircle />
          </div>
          <div className="p-4 flex justify-center relative">
            <div className="absolute top-2/3 p-2">
              <div className="tooltip bg-green-500 rounded-full p-3" data-tip="Change profile image">
                <FaCamera className="size-5 cursor-pointer" />
              </div>
            </div>
            <img src="https://harnishdesign.net/demo/html/metovo/images/authors/author-bg-1.jpg" alt="" className="rounded-md w-full h-28 object-cover mx-auto" />
          </div>
        </div>
        <UserBalance />
      </div>
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <div className="flex flex-col gap-2 p-4 rounded-lg border border-zinc-500">
          <div className="flex items-center justify-between py-4 border-b border-zinc-800">
            <p className="text-white  font-bold">Information</p>

            <div className="flex flex-col gap-2 lg:gap-6 text-white">
              <Button type="button" value="Edit" className="text-green-500  text-sm lg:text-base flex items-center font-bold py-1 px-1 rounded-lg hover:text-green-300" onClick={toogleOpenEditModal} />
              <Modal isOpen={isOpenEditModal} onClose={toogleOpenEditModal}>
                {user.accountType === AccountType.Personal ? <EditPersonalModal user={user} setUser={setUser} toogleOpenEditModal={toogleOpenEditModal} /> : <EditOrganizationalModal user={user} setUser={setUser} toogleOpenEditModal={toogleOpenEditModal} />}
              </Modal>
            </div>
          </div>
          <table className="text-left py-2 text-xs lg:text-base font-medium">
            <tr>
              <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Name</th>
              <th className="px-2 md:px-6 py-2 text-white">{user.name}</th>
            </tr>
            <tr>
              <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Email</th>
              <th className="px-2 md:px-6 py-2 text-white">{user.email}</th>
            </tr>
            <tr>
              <th className="w-1/3 flex px-2 md:px-6 py-2 text-gray-300">Bio</th>
              <th className="px-2 md:px-6 py-2 text-white">{user.bio || "No information yet"}</th>
            </tr>
            {user.accountType === AccountType.Personal ? <PersonalDetails user={user} /> : <OrganizationalDetails user={user} />}
            <tr>
              <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Account Type</th>
              <th className="px-2 md:px-6 py-2 text-white">
                <div className="badge bg-green-700 text-gray-300">{user.accountType}</div>
              </th>
            </tr>
            <tr>
              <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Wallet Address</th>
              <th className="px-2 md:px-6 py-2 text-white">{user.walletAddress !== DEFAULT_ETH_ADDRESS ? user.walletAddress : "Not connected yet"}</th>
            </tr>
            <tr>
              <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Join Date</th>
              <th className="px-2 md:px-6 py-2 text-white">{formatDate(user.createdAt)}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
