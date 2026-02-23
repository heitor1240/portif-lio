import React, { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Heading({
  as = "h2",
  children,
  className = "",
}: {
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
}) {
  return React.createElement(as, { className: `font-bold ${className}` }, children);
}
