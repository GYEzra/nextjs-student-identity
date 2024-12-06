import { Personal } from "@/types/user";
import { formatDate, formatEthAddress } from "@/utils";
import { FaFacebook, FaIdCard, FaMailBulk, FaPhoneAlt, FaTelegramPlane, FaUser } from "react-icons/fa";
import { SiBiolink } from "react-icons/si";

type PersonalInfoProps = {
    user: Personal
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ user }) => {
    const address = '0xc738eBe279e72408a61772e94187D558022e9B78';

    return (
        <div className="flex flex-col mt-12 px-4 text-white gap-2">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <FaUser />
                    <p className="text-xl font-medium uppercase">
                        {user.name}
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="tooltip" data-tip="Facebook">
                        <FaFacebook className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <div className="tooltip" data-tip="Telegram">
                        <FaTelegramPlane className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <div className="tooltip" data-tip="E-mail">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <div className="flex gap-2 items-center w-full sm:w-auto">
                    <img
                        className="w-5 h-5 rounded-xl"
                        src="/images/eth.png"
                        alt="ether icon"
                    />
                    <div className="tooltip" data-tip="Copy">
                        {formatEthAddress(address)}
                    </div>
                </div>
                <p className="text-gray-400 w-full sm:w-auto">{formatDate(user.createdAt)}</p>
            </div>

            <div className="flex gap-2 items-center">
                <FaMailBulk className="w-5 h-5" />
                <p className="text-base text-gray-300">{user.email}</p>
            </div>
            <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                    <FaIdCard className="w-4 h-4" />
                    <p className="text-base text-gray-300">{user.identity_card ?? 'Empty'}</p>
                </div>

                <div className="flex gap-2 items-center">
                    <FaPhoneAlt className="w-4 h-4" />
                    <p className="text-base text-gray-300">{user.phone ?? 'Empty'}</p>
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <SiBiolink />
                <p className="text-gray-300">
                    {user.bio ?? "Empty"}
                </p>
            </div>
        </div>
    )
}

export default PersonalInfo;