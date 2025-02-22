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
      disabled={true}
      onClick={onClick}
      className={`w-full bg-primary text-white font-semibold text-sm rounded-xl py-2.5  disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {label}
    </button>
  );
};
