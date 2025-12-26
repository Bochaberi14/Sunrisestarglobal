export default function SectionHeader({
  title,
  subtitle,
  center = false,
  light = false,
}: {
  title: string;
  subtitle?: string;
   center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-16 ${center ? "text-center mx-auto" : "max-w-2xl"}`}>
      <h2
        className={`text-4xl font-bold ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-lg ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
