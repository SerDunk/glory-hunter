import OutlineButton from "./OutlineButton";
import { Bowlby_One } from "next/font/google";

const bowlbyOne = Bowlby_One({
  weight: "400",
});

type HeroTextType = {
  title: string;
  description: string;
  buttonText?: string;
};

export default function Hero({ title, description, buttonText }: HeroTextType) {
  return (
    <div className="mt-10 flex flex-col gap-6 sm:mt-24 sm:items-center sm:justify-center">
      <div>
        <h1 className={`text-4xl sm:text-5xl ${bowlbyOne.className} uppercase`}>
          {title}
        </h1>
      </div>
      <div>
        <h3 className="text-base sm:text-xl">{description}</h3>
      </div>
      <div>
        <OutlineButton>{buttonText}</OutlineButton>
      </div>
    </div>
  );
}
