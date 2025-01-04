import Image, { type StaticImageData } from "next/image";

type SectionProps = {
  image: StaticImageData;
  heading: string;
  description: string;
  variant?: boolean;
};

export default function Section({
  image,
  heading,
  description,
  variant,
}: SectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Image src={image} alt="world cup" height={200} width={250} />
      </div>
      <div>
        <h3 className="text-[18px] font-bold">{heading}</h3>
      </div>
      <div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
