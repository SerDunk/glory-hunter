import { type FC, type ReactNode } from "react";
import { cn } from "~/lib/utils";

const Container: FC<{ children: ReactNode; className?: string }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-glory-black-900 text-glory-text mx-auto min-h-full w-full max-w-[100rem] px-4 sm:px-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
