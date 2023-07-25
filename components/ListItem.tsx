type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  return <div>ListItem</div>;
};

export default ListItem;
