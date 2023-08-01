import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import PlayButton from "./PlayButton";

type SongItemProps = {
  data: Song;
  onClick: (id: string) => void;
};

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col rounded-md gap-x-d items-center overflow-hidden justify-center bg-neutral-400/5 hover:bg-neutral-400/10 transition p-3 cursor-pointer"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden ">
        <Image
          src={imagePath || "/images/liked.png"}
          fill
          alt="songImage"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-y-1 w-full pt-4">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 w-full text-sm truncate pb-4">
          by {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
