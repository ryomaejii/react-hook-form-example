import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

export type SelectProps = ComponentPropsWithRef<"select"> & {
  inputRef?: ComponentPropsWithRef<"select">["ref"];
  options: {
    value: string;
    label: string;
  }[];
  error?: string;
};

export const Select = ({
  inputRef,
  value,
  options,
  error,
  ...props
}: SelectProps) => {
  return (
    <div className="space-y-2">
      <select
        ref={inputRef}
        value={value}
        {...props}
        className={clsx(
          "bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          value ? "text-gray-900" : "text-gray-500",
          error ? "border-red-500" : "border-gray-300",
        )}
      >
        <option value="" disabled={true} selected={true}>
          選択してください
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
