export function SectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-[1180px] px-4 ${className}`.trim()}>
      {children}
    </section>
  );
}
