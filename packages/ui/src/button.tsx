import { ButtonHTMLAttributes } from "react";
import { LoaderDots } from "./svgs";

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
      ? "bg-primary text-white"
      : color === "secondary"
        ? "bg-white border text-primary border-primary"
        : "bg-gray-300 text-black";
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${fullWidth ? "w-full" : "w-fit"} ${btnStyle} font-semibold hover:bg-opacity-90 text-sm rounded-xl p-2.5 flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {loading ? (
        <>
          <LoaderDots />
          <span>Loading...</span>
        </>
      ) : (
        label
      )}
    </button>
  );
};
