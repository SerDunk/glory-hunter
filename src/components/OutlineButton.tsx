import { Button, type ButtonProps } from "./ui/button";
import { cn } from "~/lib/utils";

type OutlineButtonProps = ButtonProps;

const OutlineButton: React.FC<OutlineButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "border-glory-gold-500 hover:button-hover text-glory-text rounded-none border-2",
        className,
      )}
      {...props}
    />
  );
};

export default OutlineButton;
