import { Organizational } from "@/types/user";

const OrganizationalDetails = ({ user }: { user: Organizational }) => {
  return (
    <>
      <tr>
        <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Location</th>
        <th className="px-2 md:px-6 py-2 text-white">{user.adddress || "No information yet"}</th>
      </tr>
      <tr>
        <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Establish License</th>
        <th className="px-2 md:px-6 py-2 text-white">{user.establish_license || "No information yet"}</th>
      </tr>
      <tr>
        <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Operate License</th>
        <th className="px-2 md:px-6 py-2 text-white">{user.operate_license || "No information yet"}</th>
      </tr>
    </>
  );
};

export default OrganizationalDetails;
