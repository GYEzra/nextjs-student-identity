"use client";
import { type DetailedHTMLProps, type ButtonHTMLAttributes, useEffect, useState, SetStateAction, Dispatch } from "react";
import Button from "./default-button";

interface CountdownButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  value: string;
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
}

const CountdownButton = ({ value, seconds, setSeconds, className, onClick, ...rest }: CountdownButtonProps) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  if (seconds === 0) return <Button type="button" className={className} {...rest} value={value} onClick={onClick} />;

  return <Button type="button" className={`${className} !bg-gray-500`} {...rest} value={`${seconds}s`} disabled />;
};

export default CountdownButton;
