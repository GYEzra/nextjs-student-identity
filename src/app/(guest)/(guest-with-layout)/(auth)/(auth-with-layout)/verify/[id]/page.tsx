"use client";
import { Verify } from "@/components/auth";

const VerifyPage = ({ params }: { params: { id: string } }) => {
    return (
        <div className="flex flex-grow gap-8">
            <div className="flex-1 hidden lg:flex w-full lg:w-1/2 bg-[url('/images/nft.jpg')] bg-cover bg-center items-center justify-center rounded aspect-square">
                <div className="flex flex-col gap-3 bg-black bg-opacity-70 text-white p-6 md:p-10 lg:p-16">
                    <h1 className="text-2xl md:text-3xl font-extrabold">
                        Kiểm Tra Hộp Thư Điện Tử / SMS
                    </h1>
                    <p className="text-sm md:text-base">
                        Kiểm tra hộp thư điện tử hoặc tin nhắn SMS của bạn. Bạn sẽ nhận
                        được một mã xác minh hoặc liên kết đặt lại mật khẩu.
                        <br></br>
                        Nếu không thấy trong hộp thư chính, hãy kiểm tra thư mục Spam hoặc
                        Rác.
                    </p>
                </div>
            </div>

            <div className="flex-1 box aspect-square align-center gap-y-2 px-10 py-20">
                <Verify id={params.id} />
            </div>
        </div>
    );
};

export default VerifyPage;