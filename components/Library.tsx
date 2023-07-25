import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {};

const Library = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-5 py-4">
        <div className="inline-flex gap-x-2 items-center">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          className="text-neutral-400 hover:text-white cursor-pointer transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};

export default Library;
