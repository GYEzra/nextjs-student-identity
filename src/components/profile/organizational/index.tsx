import { Organizational } from "@/types/user";
// import { formatDate, formatEthAddress } from "@/utils/utils";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaFacebook, FaMailBulk, FaTelegramPlane, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiBiolink } from "react-icons/si";
import { TbLicense } from "react-icons/tb";

type OrganizationalInfoProps = {
    user: Organizational
}

const OrganizationalInfo: React.FC<OrganizationalInfoProps> = ({ user }) => {
    const address = '0xc738eBe279e72408a61772e94187D558022e9B78';

    return (
        // <div className="flex flex-col mt-12 px-4 text-white gap-2">
        //     <div className="flex justify-between items-center">
        //         <div className="flex gap-2 items-center">
        //             <FaUsers className="w-5 h-5 md:w-6 md:h-6" />
        //             <p className="text-base md:text-xl font-medium uppercase">
        //                 {user.name}
        //             </p>
        //         </div>

        //         <div className="flex gap-4">
        //             <div className="tooltip" data-tip="Facebook">
        //                 <FaFacebook className="w-4 h-4 sm:w-6 sm:h-6" />
        //             </div>
        //             <div className="tooltip" data-tip="Telegram">
        //                 <FaTelegramPlane className="w-4 h-4 sm:w-6 sm:h-6" />
        //             </div>
        //             <div className="tooltip" data-tip="E-mail">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     viewBox="0 0 24 24"
        //                     fill="currentColor"
        //                     className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer"
        //                 >
        //                     <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        //                     <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        //                 </svg>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="flex flex-wrap gap-2 w-full sm:w-auto">
        //         <div className="flex gap-2 items-center w-full sm:w-auto">
        //             <img
        //                 className="w-5 h-5 rounded-xl"
        //                 src="/images/eth.png"
        //                 alt="ether icon"
        //             />
        //             <div className="tooltip" data-tip="Copy">
        //                 {formatEthAddress(address)}
        //             </div>
        //         </div>
        //         <p className="text-gray-400 w-full sm:w-auto">{formatDate(user.createdAt)}</p>
        //     </div>
        //     <div className="flex gap-2 items-center">
        //         <FaLocationDot className="w-4 h-4" />
        //         <p className="text-base text-gray-300">{user.adddress ?? 'Empty'}</p>
        //     </div>
        //     <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 ">
        //         <div className="w-full md:w-1/2 flex gap-2 items-center">
        //             <FaMailBulk className="w-4 h-4" />
        //             <p className="text-base text-gray-300">
        //                 {user.email}
        //             </p>
        //         </div>
        //     </div>

        //     <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 md:gap-4 ">
        //         <div className="w-full md:w-1/2 flex gap-2 items-center">
        //             <BsBookmarkCheckFill className="w-4 h-4" />
        //             <p className="text-base text-gray-300">{user.establish_license ?? 'Empty'}</p>
        //         </div>
        //         <div className="w-full md:w-1/2 flex gap-2 items-center">
        //             <TbLicense className="w-5 h-5 m-0 p-0" />
        //             <p className="text-base text-gray-300">{user.operate_license ?? 'Empty'}</p>
        //         </div>
        //     </div>

        //     <div className="flex gap-2 items-center">
        //         <SiBiolink />
        //         <p className="text-gray-300">
        //             {user.bio ?? "Empty"}
        //         </p>
        //     </div>
        // </div>
        <div>
            đây là tràn tổ chức
        </div>
    )
}

export default OrganizationalInfo;