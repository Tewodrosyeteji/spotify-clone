import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button className="transition opacity-0 rounded-full p-4 bg-green-500 translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:sclae-110 flex items-center drop-shadow-md">
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
