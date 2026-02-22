export function WireframeCard({ title, description, cells }: { title: string; description: string; cells: number }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
      <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{title}</h3>
      <p className="text-sm text-white/70 mb-4">{description}</p>
      <div className="bg-white/5 rounded p-4">
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cells}, 1fr)` }}>
          {Array.from({ length: cells }).map((_, i) => (
            <div
              key={i}
              className="bg-[#ffd1ef] border-2 border-dashed border-[#ff47c0] rounded h-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
