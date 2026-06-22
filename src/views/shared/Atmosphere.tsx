export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] animate-aurora rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute right-[-10%] top-[35%] h-[50vh] w-[50vh] animate-aurora rounded-full bg-accent-violet/15 blur-[130px] [animation-delay:-6s]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />
    </div>
  );
}
