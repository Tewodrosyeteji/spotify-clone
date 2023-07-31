"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

type MediaItemProps = {
  data: Song;
  onClick?: (id: string) => void;
};

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    // default turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 rounded-md w-full p-2 hover:bg-neutral-800/50 cursor-pointer"
    >
      <div className="relative rounded-md overflow-hidden min-h-[48px] min-w-[48px] ">
        <Image
          src={imageUrl || "/images/liked.png"}
          fill
          alt="mediaImage"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
