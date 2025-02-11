import { type DetailedHTMLProps, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  value: string;
}

const Button = ({ value, ...rest }: ButtonProps) => {
  return (
    <button type="submit" className="h-12 bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out" {...rest}>
      {value}
    </button>
  );
};

export default Button;
