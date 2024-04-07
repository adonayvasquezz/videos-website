import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "..";
import logo from "@/public/images/videosweb.svg";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex align-middle  content-center items-center md:justify-between mt-4 md:mt-6 flex-col md:flex-row ">
        <div className="flex justify-center w-full md:w-1/4 mb-5 md:mb-0">
          <Link href={"/"}>
            <Image alt="Website Logo" height={50} src={logo} />
          </Link>
        </div>

        <SearchBar />
        <div className="w-1/4" />
      </div>
    </nav>
  );
};
