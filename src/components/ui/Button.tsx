import { ComponentProps } from "react";
import ButtonSvg from "../../assets/svg/ButtonSvg";

interface ButtonProps extends ComponentProps<"button"> {
  href?: string;
  px?: string;
  white?: boolean;
  className?: string;
}

const Button = ({
  white,
  className,
  href,
  px,
  children,
  ...props
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 
  transition-colors hover:text-color-1 ${px || `px-7`} ${white ? `text-n-8` : `text-n-1`} 
  ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button {...props} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
