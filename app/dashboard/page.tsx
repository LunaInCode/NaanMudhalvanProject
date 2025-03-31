import { CornerDownLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pl-6 pt-0">
      <div className="flex flex-col justify-center content-center items-center gap-30 p-10">
        <h1 className="text-center text-4xl font-semibold mt-60 pl-20 pr-20">
          This is the dashboard page, click on one of the links in the sidebar
          to navigate to the sections
        </h1>
        <h1>{<CornerDownLeft size={125} />}</h1>
      </div>
    </div>
  );
}
