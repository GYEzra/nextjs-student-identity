import { ForgetPassword } from "@/components/auth";

const ForgetPasswordPage = () => {
    return (
        <div className="flex flex-grow gap-8">
            <div className="flex-1 hidden lg:flex w-full lg:w-1/2 bg-[url('/images/nft.jpg')] bg-cover bg-center items-center justify-center rounded aspect-square">
                <div className="flex flex-col gap-3 bg-black bg-opacity-70 text-white p-6 md:p-10 lg:p-16">
                    <h1 className="text-2xl md:text-3xl font-extrabold">
                        CHÀO MỪNG ĐẾN VỚI FINTECH
                    </h1>
                    <p className="text-sm md:text-base">
                        Chúng tôi rất vui được chào đón bạn ! Khám phá, sưu tầm và bán
                        những NFT độc đáo từ hàng triệu người trên toàn thế giới.
                    </p>
                </div>
            </div>

            <div className="flex-1 box aspect-square align-center gap-y-2 px-10 py-20 justify-between">
                <ForgetPassword />
            </div>
        </div>
    );
};

export default ForgetPasswordPage;