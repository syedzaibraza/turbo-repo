import { Icon } from "@iconify/react/dist/iconify.js";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
  color: "primary" | "secondary";
  fullWidth?: boolean;
}

export const Button = ({
  label,
  onClick,
  loading = false,
  disabled,
  color = "primary",
  fullWidth = true,
  ...props
}: ButtonProps) => {
  const btnStyle =
    color === "primary"
      ? "bg-primary text-white hover:bg-white hover:text-primary  hover:border-primary hover:transition-colors hover:duration-300 "
      : color === "secondary"
        ? "bg-white border text-primary border-primary"
        : "bg-gray-300 text-black";
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${fullWidth ? "w-full" : "w-fit"} ${btnStyle} border border-primary font-semibold dur text-sm rounded-xl p-2.5 flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {loading ? (
        <>
          <Icon icon="mingcute:loading-fill" className="animate-spin w-5 h-5" />
          <span>Loading...</span>
        </>
      ) : (
        label
      )}
    </button>
  );
};
