import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-16 flex justify-center flex-1 h-[60vh]">
      <div>
        <h2 className="text-3xl">Page not found</h2>
        <p className="mt-8 mb-2">Could not find requested resource </p>
        <Link
          href="/"
          className="font-bold text-lg text-blue-400 hover:text-blue-500"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
