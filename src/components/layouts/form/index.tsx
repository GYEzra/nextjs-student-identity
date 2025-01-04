import React from "react";

type FormLayoutProps = {
  children: React.ReactNode;
};

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return <div className="min-w-80 max-w-max border border-[#272b30] bg-[#111315] px-4 py-3 shadow-[0_0_30px_#7866cc1f] rounded-md">{children}</div>;
};

export default FormLayout;
