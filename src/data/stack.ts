export type StackItem = {
  key: "react" | "nextjs" | "typescript" | "node" | "tailwind" | "cicd";
  label: string;
};

export const stack: StackItem[] = [
  { key: "react", label: "React" },
  { key: "nextjs", label: "Next.js" },
  { key: "typescript", label: "TypeScript" },
  { key: "node", label: "Node.js" },
  { key: "tailwind", label: "Tailwind" },
  { key: "cicd", label: "CI/CD" },
];
