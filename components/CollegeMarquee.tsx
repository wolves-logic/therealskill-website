const colleges = [
  'NIT',
  'VIT Vellore',
  'BITS Pilani',
  'JNTU Hyderabad',
  'Anna University',
  'SRM Institute',
  'Manipal University',
  'Amity University',
  'LPU',
  'Osmania University',
  'Thapar University',
  'PES University',
  'RV College',
  'IIIT Hyderabad',
  'Chandigarh University',
  'MIT Pune',
]

export default function CollegeMarquee() {
  return (
    <section className="border-y border-surface-border bg-surface/20 py-4 overflow-hidden">
      <p className="text-center text-txt-muted text-xs uppercase tracking-widest mb-3">
        Trusted by students from
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...colleges, ...colleges].map((college, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-txt-secondary text-sm font-medium px-1 shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green/60 shrink-0" />
              {college}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
