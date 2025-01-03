import Navbar from "../../ui/navbar";
import Footer from "../footer";

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="relative">
        <Navbar />
        <video autoPlay loop muted className="absolute w-auto min-w-full min-h-svh max-w-none -z-10">
          <source src="/videos/section.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      <div className="mt-[80px] pb-4 max-w-full mx-auto px-4 py-6 sm:px-6 lg:px-8 z-50">{children}</div>
      <Footer />
    </>
  );
};

export default BaseLayout;
