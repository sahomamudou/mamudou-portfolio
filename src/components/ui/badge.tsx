import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs leading-5 font-medium text-accent",
        className,
      )}
      {...props}
    />
  );
}

export function BadgeList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
