import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

const Button = ({ children, icon, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-[#F05A42] hover:bg-[#E04B34] text-white font-bold text-md py-1 px-4 rounded-full transition-all active:scale-95 shadow-sm ${className}`}
      {...props}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
