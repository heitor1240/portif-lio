import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export function Button({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; className?: string }) {
  return (
    <button
      {...props}
      className={`rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
