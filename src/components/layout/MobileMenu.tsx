type Props = {
  menuItems: string[];
  isOpen: boolean;
};

export default function MobileMenu({ menuItems, isOpen }: Props) {
  if (!isOpen) return null;

  return (
    <div className="navbar__mobile-menu">
      {menuItems.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </div>
  );
}
