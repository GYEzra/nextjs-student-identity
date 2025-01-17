import { Personal } from "@/types/user";

const PersonalDetails = ({ user }: { user: Personal }) => {
  return (
    <>
      <tr>
        <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Phone Number</th>
        <th className="px-2 md:px-6 py-2 text-white">{user.phone || "No information yet"}</th>
      </tr>
      <tr>
        <th className="w-1/3 px-2 md:px-6 py-2 text-gray-300">Identity Card</th>
        <th className="px-2 md:px-6 py-2 text-white">{user.identity_card || "No information yet"}</th>
      </tr>
    </>
  );
};

export default PersonalDetails;
