export function OrderSekeleton() {
  return (
    <div className="w-full border rounded-md animate-pulse">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-3 bg-secondary/50 border-b">
        <div className="flex items-center gap-2">
          <div className="h-4 w-20 rounded bg-muted hidden md:block" />
          <div className="h-4 w-32 rounded bg-muted" />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-32 rounded bg-muted hidden md:block" />
          <div className="h-4 w-40 rounded bg-muted" />
        </div>

        <div className="h-6 w-20 rounded-full bg-muted" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:items-center justify-between p-3 gap-4">
        {/* Left */}
        <div className="flex items-start gap-3 w-full">
          <div className="size-14 shrink-0 rounded-lg bg-muted" />
          <div className="flex flex-col gap-2 w-full">
            <div className="h-4 w-3/4 rounded bg-muted" />
            <div className="h-4 w-1/2 rounded bg-muted hidden sm:block" />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start md:items-end gap-2 md:w-32">
          <div className="h-3 w-16 rounded bg-muted" />
          <div className="h-5 w-24 rounded bg-muted" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-3 bg-secondary/50 border-t">
        <div className="h-4 w-32 rounded bg-muted" />
        <div className="h-5 w-24 rounded bg-muted" />
      </div>
    </div>
  );
}
