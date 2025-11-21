import { MdDrafts } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { BsVectorPen } from "react-icons/bs";

const Card = () => {
  const data = [
    {
      title: "Single Page",
      icon: CiFileOn,
    },
    {
      title: "Design only",
      icon: FaFigma,
    },
    {
      title: "Slack Communication",
      icon: BsChat,
    },
    {
      title: "Custom Graphics / Illustrations",
      icon: BsVectorPen,
    },
  ];
  return (
    <div className="h-78 w-72 rounded-2xl bg-[#d8bd9c] shadow-lg">
      <div className="m-4 flex">
        <MdDrafts className="mr-3 text-4xl text-neutral-900" />
        <div className="flex flex-col leading-tight tracking-tight">
          <h1 className="text-lg leading-none font-semibold text-neutral-900">
            One-Off
          </h1>
          <p className="text-sm text-neutral-800">
            Launch your dream site in 7 days
          </p>
        </div>
      </div>
      <div className="mt-3 h-px w-full bg-linear-to-r from-transparent via-neutral-500 to-transparent"></div>

      <div className="mt-4 px-4 py-2">
        {data.map((items, index) => {
          return (
            <div key={index} className="flex flex-row gap-2">
              <items.icon className="mt-1 mb-2 text-sm font-semibold text-neutral-900" />
              <p className="text-sm tracking-tight text-neutral-900">
                {items.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-3 h-px w-full bg-linear-to-r from-transparent via-neutral-500 to-transparent"></div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-col px-6 tracking-tight">
          <h1 className="text-xl leading-none">$1300</h1>
          <p className="text-neutral-500">Billed one time</p>
        </div>
        <div className="mr-2 flex flex-row items-center gap-1 rounded-md bg-neutral-900 text-neutral-200">
          <FaFigma className="mt-1 ml-1" />
          <p className="mr-2">Figma Project</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
