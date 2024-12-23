import Navbar from "../../ui/navbar";

type BaseLayoutProps = {
    children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="py-4 bg-black overflow-hidden min-h-screen">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
        </>
    );
}

export default BaseLayout;