import Link from "next/link";
import { SearchBar } from "..";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex align-middle content-center items-center md:justify-between mt-4 md:mt-6 flex-col md:flex-row ">
        <div className="text-[1.65rem] text-blue-400 w-full text-center md:text-left md:w-1/4">
          <Link href={"/"}>VIDEOS WEB </Link>
        </div>

        <SearchBar />
        <div className="w-1/4" />
      </div>
    </nav>
  );
};
