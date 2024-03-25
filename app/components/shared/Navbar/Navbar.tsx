import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <div className="mt-6 text-[1.65rem] text-blue-400">VIDEOS WEB</div>
      </Link>
    </nav>
  );
};
