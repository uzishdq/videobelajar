import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-80 w-full flex justify-center items-center">
      <div className="flex flex-col items-center space-y-3">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="text-sm text-muted-foreground">
          Sedang memuat halaman, harap tunggu...
        </p>
      </div>
    </div>
  );
}
