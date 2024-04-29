import { ComponentProps } from "react";
import brackets from "../assets/svg/Brackets";

interface TagLineProps extends ComponentProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

export const TagLine = ({ className, children, ...props }: TagLineProps) => {
  return (
    <div {...props} className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};
