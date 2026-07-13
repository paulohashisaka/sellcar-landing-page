export function Logo({ light = false, label }) {
  return (
    <a href="#inicio" className="inline-flex items-center gap-2.5" aria-label={label}>
      <span className="grid size-10 place-items-center rounded-xl bg-brand-orange text-lg font-black text-white shadow-lg shadow-orange-950/20">
        S
      </span>
      <span className={`text-xl font-black tracking-[-0.04em] ${light ? 'text-white' : 'text-navy-950'}`}>
        Sell<span className="text-brand-orange">Car</span>
      </span>
    </a>
  )
}
