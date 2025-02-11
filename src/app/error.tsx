"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-5 text-white text-center">
        <p className="text-8xl lg:text-9xl font-extrabold special-text">Oops!</p>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold uppercase">404 - Internal Server</p>
          {/* <p className="text-2xl font-bold uppercase">500 - internal server</p> */}
          <p className="text-sm w-3/4 mx-auto text-gray-300">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        </div>

        <Link href="/" className="uppercase special-button w-3/4 lg:w-1/4 mx-auto font-semibold">
          Go to home
        </Link>
      </div>
    </div>
  );
}
