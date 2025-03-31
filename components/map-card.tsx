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

interface MapCardProps {
  name: string;
  image: string;
  coordinates: string;
  splash: string;
}

export function MapCard({ name, image, coordinates, splash }: MapCardProps) {
  return (
    <div className="flex flex-row mt-5 ml-5 mr-5 p-4 w-max-sm h-max border-2 border-gray-300 rounded-lg">
      <Image
        src={image}
        alt={name}
        width={500}
        height={120}
        className={`border-r-2 border-gray-300 pr-3 max-w-500 max-h-30`}
      />
      <div className="flex flex-col justify-evenly ml-10 w-100">
        <h2 className={`${ubuntu.className} text-xl font-semibold text-center`}>
          {name}
        </h2>
        <h2
          className={`${ubuntu.className} text-lg font-normal text-gray-400 text-center`}
        >
          {coordinates ? coordinates : "N/A"}
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
              <AlertDialogDescription>
                <Image src={splash} alt={name} width={800} height={800} />
              </AlertDialogDescription>
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
