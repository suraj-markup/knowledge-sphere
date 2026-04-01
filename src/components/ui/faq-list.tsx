import type { FaqItem } from "@/lib/site-data";

export function FaqList({
  items,
  className = "",
}: {
  items: FaqItem[];
  className?: string;
}) {
  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[1.4rem] bg-[var(--ks-surface)] p-6 shadow-[var(--ks-shadow-soft)]"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 [font-family:var(--font-heading),Avenir_Next,sans-serif] text-lg font-semibold leading-7 text-[var(--ks-dark)]">
            <span>{faq.question}</span>
            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--ks-surface-high)] text-[0.78rem] text-[var(--ks-primary)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--ks-text-muted)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
