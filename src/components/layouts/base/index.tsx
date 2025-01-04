import Navbar from "../../ui/navbar";
import Footer from "../footer";

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center items-center max-w-full min-h-svh px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BaseLayout;
