import { cn } from "../../../lib/utils";

const Input = ({ className, value, placeholder, type, ...props }) => {
  return (
    <input
      className={cn("bg-green3  px-4 py-2 rounded-full w-64", className)}
      type={type}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  );
};

export default Input;
