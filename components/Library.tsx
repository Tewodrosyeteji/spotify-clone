import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUplaodModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";

type LibraryProps = {
  songs: Song[];
};

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const subscribeModal = useSubscribeModal();
  const onPlay = useOnPlay(songs);
  const authModal = useAuthModal();
  const { user, subscription } = useUser();
  const uploadModal = useUploadModal();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }
    uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-5 py-4">
        <div className="inline-flex gap-x-2 items-center">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 hover:text-white cursor-pointer transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
