import { type ReactNode } from "react";
import { CheckCircle } from "lucide-react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success${className ? ` ${className}` : ""}`}
    >
      <CheckCircle size={16} />
      {children}
    </span>
  );
}
