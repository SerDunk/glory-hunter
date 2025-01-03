import { type FC, type ReactNode } from "react";
import { cn } from "~/lib/utils";

const Container: FC<{ children: ReactNode; className: string }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("min-h-full w-full bg-[#0E1115]", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
