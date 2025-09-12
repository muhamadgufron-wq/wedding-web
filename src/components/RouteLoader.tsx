"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // durasi loader
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md z-50">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-rose-400 opacity-30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-rose-500 animate-spin"></div>
          </div>
          <p className="mt-6 text-lg font-semibold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Memuat halaman...
          </p>
        </div>
      )}
      {children}
    </>
  );
}
