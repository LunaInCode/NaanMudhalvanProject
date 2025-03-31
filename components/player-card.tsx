import { ubuntu } from "../app/ui/fonts";
import Image from "next/image";

interface PlayerCardProps {
  name: string;
  image: string;
}

export function PlayerCard({ name, image }: PlayerCardProps) {
  return (
    <div className="border-2 border-gray-300 rounded-lg w-80">
      <Image
        src={image}
        alt={name}
        width={134}
        height={320}
        className="self-center mx-auto m-5 mb-0 pb-5 border-b-2 border-gray-300"
      />
      <h1
        className={`${ubuntu.className} text-xl font-semibold text-center p-5`}
      >
        {name}
      </h1>
    </div>
  );
}
