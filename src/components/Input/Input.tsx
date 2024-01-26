import clsx from "clsx";
import type { ComponentPropsWithRef, ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  inputRef?: ComponentPropsWithRef<"input">["ref"];
  error?: string;
};

export const Input = ({ inputRef, error, className, ...props }: InputProps) => {
  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        className={clsx(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          className,
          error ? "border-red-500" : "border-gray-300",
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
