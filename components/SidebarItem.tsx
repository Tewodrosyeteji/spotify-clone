import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type SidebarProps = {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
};

const SidebarItem: React.FC<SidebarProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex h-auto w-full items-center text-md gap-x-4 font-medium text-neutral-400 hover:text-white py-1",
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
