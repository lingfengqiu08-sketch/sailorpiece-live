import updatesData from "@/data/updates.json";

export function UpdateTimeline({ limit = 5 }: { limit?: number }) {
  const list = updatesData.updates.slice(0, limit);
  return (
    <ol className="space-y-3">
      {list.map((u, i) => (
        <li key={u.name} className="flex gap-4 surface p-4">
          <div className="flex flex-col items-center min-w-[60px]">
            <span className="text-xs text-[var(--color-text-muted)]">
              {u.date}
            </span>
            <span className={`mt-2 w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"}`}></span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{u.name}</h3>
            <p className="text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
              {u.summary}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
