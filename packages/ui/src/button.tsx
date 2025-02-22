import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({
  label,
  type = "button",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="ui-w-full ui-bg-red-600 ui-text-white ui-font-semibold ui-text-sm ui-rounded-xl ui-py-2.5"
      {...props}
    >
      {label}
    </button>
  );
};
