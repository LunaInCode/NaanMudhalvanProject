import { montserrat, ubuntu } from "./ui/fonts";
import ColourfulText from "@/components/ui/colourful-text";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col justify-center items-center h-screen gap-2">
        <h1 className={`${montserrat.className} font-semibold text-4xl`}>
          Welcome To The Official
        </h1>
        <h1 className={`${ubuntu.className} font-bold text-7xl`}>
          <ColourfulText text="VALORANT DATABASE"></ColourfulText>
        </h1>
        <Link
          className={`${buttonVariants()} ${
            montserrat.className
          } font-semibold text-3xl mt-20`}
          href="/dashboard"
        >
          Get Started
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
