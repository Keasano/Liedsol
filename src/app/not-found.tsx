export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-[#212121] mb-4">404</h2>
        <p className="text-xl text-[#929796] mb-8">This page could not be found.</p>
        <a
          href="/"
          className="bg-[#A8EC8F] text-[#212121] px-6 py-3 rounded-full hover:opacity-90 transition-opacity inline-block"
        >
          Return Home
        </a>
      </div>
    </div>
  );
} 