export default function Loading() {
  return (
    <div className="min-h-screen pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero skeleton */}
        <div className="text-center mb-16 space-y-4">
          <div className="h-5 w-40 rounded-full bg-surface-light animate-pulse mx-auto" />
          <div className="h-12 w-3/4 max-w-xl rounded-2xl bg-surface-light animate-pulse mx-auto" />
          <div className="h-12 w-2/3 max-w-lg rounded-2xl bg-surface-light animate-pulse mx-auto" />
          <div className="h-5 w-1/2 max-w-md rounded-full bg-surface-light animate-pulse mx-auto" />
        </div>
        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-surface border border-surface-border p-6 space-y-3"
            >
              <div className="flex justify-between">
                <div className="h-6 w-20 rounded-full bg-surface-light animate-pulse" />
                <div className="h-6 w-16 rounded-full bg-surface-light animate-pulse" />
              </div>
              <div className="h-5 w-4/5 rounded-lg bg-surface-light animate-pulse" />
              <div className="h-4 w-full rounded-lg bg-surface-light animate-pulse" />
              <div className="h-4 w-3/4 rounded-lg bg-surface-light animate-pulse" />
              <div className="flex gap-2 pt-1">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-5 w-14 rounded-md bg-surface-light animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
