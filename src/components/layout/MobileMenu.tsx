import { useEffect, useRef } from 'react';

type Props = {
  menuItems: string[];
  isOpen: boolean;
  onItemClick: (section: string) => void;
};

export default function MobileMenu({ menuItems, isOpen, onItemClick }: Props) {
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && firstButtonRef.current) {
      firstButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <nav id="mobile-menu" className="navbar__mobile-menu" role="navigation" aria-label="Mobile navigation">
      {menuItems.map((item, index) => (
        <button
          key={item}
          ref={index === 0 ? firstButtonRef : undefined}
          onClick={() => onItemClick(item)}
          className="navbar__mobile-menu__item"
          type="button"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
