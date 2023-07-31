"use client";

import SongItem from "@/components/SongItem";
import { Song } from "@/types";

type PageContentProps = {
  songs: Song[];
};

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">There is no song availabel</div>
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((item) => (
        <SongItem key={item.id} onClick={() => {}} data={item} />
      ))}
    </div>
  );
};

export default PageContent;
