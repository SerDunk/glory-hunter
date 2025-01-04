import OutlineButton from "./OutlineButton";
import { Bowlby_One } from "next/font/google";
import Circle from "./GlowingCircle";

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
    <div className="relative flex flex-col gap-6 py-20 sm:mt-40 sm:items-center sm:justify-center">
      <Circle />
      <div>
        <h1 className={`text-4xl sm:text-6xl ${bowlbyOne.className} uppercase`}>
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
