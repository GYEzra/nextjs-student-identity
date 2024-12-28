import Navbar from "../../ui/navbar";
import Footer from "../footer";

type BaseLayoutProps = {
    children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="bg-black max-w-full mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default BaseLayout;