const sizes = {
  content: "max-w-[1180px]",
  wide: "max-w-[1320px]",
};

export function SectionContainer({
  children,
  className = "",
  size = "content",
  as: Tag = "section",
}: {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof sizes;
  as?: "section" | "div";
}) {
  return (
    <Tag className={`mx-auto w-full ${sizes[size]} px-4 md:px-6 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
