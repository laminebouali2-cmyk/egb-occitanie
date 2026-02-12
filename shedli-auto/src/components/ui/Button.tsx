import { type ReactNode } from "react";
import { Phone } from "lucide-react";

type Variant = "primary" | "secondary" | "phone" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-sm",
  secondary:
    "border-[1.5px] border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white",
  phone:
    "bg-primary-500 text-white hover:bg-primary-600",
  ghost:
    "text-primary-500 hover:text-primary-600",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-8 py-4 text-lg",
};

const phoneSizeClasses: Record<Size, string> = {
  sm: "px-6 py-3 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
};

const baseClasses =
  "rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2";

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  type,
}: ButtonProps) {
  const sizes = variant === "phone" ? phoneSizeClasses : sizeClasses;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizes[size]}${className ? ` ${className}` : ""}`;

  const content = (
    <>
      {variant === "phone" && <Phone size={18} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {content}
    </button>
  );
}
