import { Button, type ButtonProps } from "./ui/button";
import { cn } from "~/lib/utils";
type OutlineButtonProps = ButtonProps;

const OutlineButton: React.FC<OutlineButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <Button
      className={cn("rounded-none border-2 border-[#FFDC87]", className)}
      {...props}
    />
  );
};

export default OutlineButton;
