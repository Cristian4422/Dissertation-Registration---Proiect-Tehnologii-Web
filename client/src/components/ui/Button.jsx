import { cn } from "../../../lib/utils.jsx";

const Button = ({ children, type, className, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        "px-4 py-2 rounded-full text-white font-bold font-helvetica bg-green1 hover:bg-green1hover",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
