"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center gap-x-4 rounded-md bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} fill alt="image" className="object-cover" />
      </div>
      <p className="font-medium truncate py-5"> {name}</p>
      <div className="absolute rounded-full bg-green-500 p-4 flex items-center justify-center drop-shadow-md right-5 opacity-0 group-hover:opacity-100 hover:scale-110 transition ">
        <FaPlay size={20} className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
