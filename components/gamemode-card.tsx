import { ubuntu } from "../app/ui/fonts";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";

interface GameModeCardProps {
  name: string;
  image: string;
  description: string;
  duration: string;
}

export function GameModeCard({
  image,
  name,
  description,
  duration,
}: GameModeCardProps) {
  return (
    <div className="flex flex-row mt-5 ml-5 mr-5 p-4 w-max-sm h-max border-2 border-gray-300 rounded-lg">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className={`border-r-2 border-gray-300 pr-3`}
      />
      <div className="flex flex-col justify-evenly">
        <h2
          className={`${ubuntu.className} text-xl font-semibold text-center w-50`}
        >
          {name}
        </h2>
        <h2
          className={`${ubuntu.className} text-lg font-normal text-gray-400 text-center`}
        >
          {duration}
        </h2>
      </div>
      <div className="flex justify-end w-full pr-5">
        <AlertDialog>
          <AlertDialogTrigger
            asChild
            className={`${ubuntu.className} text-center text-lg font-medium`}
          >
            <Button
              variant="outline"
              className="border-2 p-5 text-center self-center"
            >
              Details
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{name}</AlertDialogTitle>
              <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
