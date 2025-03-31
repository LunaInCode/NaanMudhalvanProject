import { ubuntu } from "../app/ui/fonts";
import Image from "next/image";

interface WeaponCardProps {
  name: string;
  image: string;
  category: string;
  cost: number;
}

export function WeaponCard({ name, image, category, cost }: WeaponCardProps) {
  return (
    <div className="border-2 border-gray-300 h-60 flex flex-col justify-evenly rounded-lg">
      <h1 className={`${ubuntu.className} text-xl font-semibold text-center`}>
        {name}
      </h1>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="self-center max-h-12 w-auto"
      />
      <div className="flex flex-row justify-between px-20">
        <h2 className={`${ubuntu.className} text-lg font-md text-center`}>
          {category.split("::").pop()}
        </h2>
        <h2
          className={`${ubuntu.className} text-lg font-md text-center text-gray-400`}
        >
          {cost}
        </h2>
      </div>
    </div>
  );
}
