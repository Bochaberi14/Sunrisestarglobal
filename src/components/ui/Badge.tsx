export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs sm:text-sm font-medium text-primary">
      {label}
    </span>
  );
}
