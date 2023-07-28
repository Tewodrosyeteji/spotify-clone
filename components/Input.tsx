"use client";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, type, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        className={twMerge(
          ` w-full flex rounded-md bg-neutral-700 border border-transparent p-3 text-sm focus:outline-none placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 file:bg-transparent file:boarder-0 file:text-sm file:font-medium`,
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
