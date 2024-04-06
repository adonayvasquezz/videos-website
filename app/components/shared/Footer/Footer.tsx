import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="pt-8 pb-12 border-t-2 border-gray-600 mt-8">
      <div className="flex justify-center">
        <Link className="hover:text-blue-400 px-4" href={"/"}>
          Anunciarse
        </Link>
        -
        <Link className="hover:text-blue-400 px-4" href={"/"}>
          Mapa del sitio
        </Link>
        -
        <Link className="hover:text-blue-400 px-4" href={"/"}>
          Términos y condiciones
        </Link>
        -
        <Link className="hover:text-blue-400 px-4" href={"/"}>
          Política de privacidad
        </Link>
      </div>
    </div>
  );
};
