import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-4 text-[#666666]">This page could not be found.</p>
      <Link
        href="/docs/introduction"
        className="inline-block mt-6 px-6 py-2 bg-[#F5F5F5] text-black rounded-lg hover:bg-[#EBEBEB] transition-colors"
      >
        Return to Introduction
      </Link>
    </div>
  );
} 