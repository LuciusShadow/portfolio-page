type Props = {
  menuItems: string[];
  isOpen: boolean;
  onItemClick: (section: string) => void;
};

export default function MobileMenu({ menuItems, isOpen, onItemClick }: Props) {
  if (!isOpen) return null;

  return (
    <div className="navbar__mobile-menu">
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => onItemClick(item)}
          className="navbar__mobile-menu__item"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
