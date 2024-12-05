import React from "react";

type FormLayoutProps = {
    children: React.ReactNode,
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
    return (
        <div className="rounded-lg p-[2px] bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 drop-shadow-md shadow-white/60 overflow-hidden">
            <div className="rounded-[calc(0.5rem-1px)] bg-black/90 dark:bg-gray-900 p-4">
                {children}
            </div>
        </div>
    );
};

export default FormLayout;