import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center font-power-grotesk">
      <h1 className="text-[120px] font-bold text-[#212121] leading-none mb-4">404</h1>
      <p className="text-[#636161] text-lg mb-8">This page could not be found.</p>
      <Link 
        href="/" 
        className="bg-[#E1FFE8] text-[#212121] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  )
} 