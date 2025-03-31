import { ubuntu } from "../app/ui/fonts";
import Image from "next/image";

interface BundleCardProps {
  name: string;
  image: string;
}

export function BundleCard({ name, image }: BundleCardProps) {
  return (
    <div className="border-2 border-gray-300 rounded-lg w-max">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="self-center m-5 mb-0 pb-5 border-b-2 border-gray-300 h-60"
      />
      <h1
        className={`${ubuntu.className} text-xl font-semibold text-center p-5`}
      >
        {name}
      </h1>
    </div>
  );
}
