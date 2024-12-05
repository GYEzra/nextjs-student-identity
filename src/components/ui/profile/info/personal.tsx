import { Personal } from "@/types/user";

type PersonalInfoProps = {
    user: Personal
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ user }) => {

    return (
        <div></div>
        // <div className="flex flex-col mt-12 px-4 text-white gap-1">
        //     <div className="flex justify-between items-center">
        //         <div className="flex gap-2 items-center">
        //             <FaUser />
        //             <p className="text-xl font-medium uppercase">
        //                 {session?.user.name}
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
        //                 {account.data?.substring(0, 7) +
        //                     "..." +
        //                     account.data?.substring(account.data?.length - 5)}
        //             </div>
        //         </div>
        //         <p className="text-gray-400 w-full sm:w-auto">Thời gian tham gia</p>
        //     </div>

        //     <div className="flex gap-2 items-center">
        //         <FaMailBulk className="w-5 h-5" />
        //         <p className="text-base text-gray-300">{session?.user.email}</p>
        //     </div>
        //     <div className="flex gap-4">
        //         <div className="flex gap-2 items-center">
        //             <FaIdCard className="w-4 h-4" />
        //             <p className="text-base text-gray-300">0793030047290</p>
        //         </div>

        //         <div className="flex gap-2 items-center">
        //             <FaPhoneAlt className="w-4 h-4" />
        //             <p className="text-base text-gray-300">0373378293</p>
        //         </div>
        //     </div>

        //     <div className="flex gap-2 items-center">
        //         <SiBiolink />
        //         <p className="text-gray-300">
        //             {profile?.bio || "Chưa có thông tin"}
        //         </p>
        //     </div>
        // </div>
    )
}

export default PersonalInfo;