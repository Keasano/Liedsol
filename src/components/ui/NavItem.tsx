import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}

export const NavItem = ({
  href,
  children,
  isActive = false,
  className = ''
}: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`
        relative px-4 py-2
        text-sm font-medium
        transition-colors duration-200
        ${isActive
          ? 'text-green-500'
          : 'text-gray-400 hover:text-white'
        }
        ${className}
      `}
    >
      {children}
      {isActive && (
        <span
          className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-green-500/0 via-green-500/70 to-green-500/0"
        />
      )}
    </Link>
  );
}; 