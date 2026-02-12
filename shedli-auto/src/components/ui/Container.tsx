import { type ElementType, type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16${className ? ` ${className}` : ""}`}
    >
      {children}
    </Component>
  );
}
