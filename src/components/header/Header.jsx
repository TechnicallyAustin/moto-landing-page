import React from "react";
import MenuIcon from "../../../public/icons/MenuIcon";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full h-16 flex justify-center bg-black bg-opacity-20 items-center text-white">
      <article className="w-full h-full flex justify-between items-center  p-3 backdrop-filter backdrop-blur-lg">
        <button className="w-auto h-full text-start text-2xl">
          <span className="w-auto text-danger">Moto</span>2Go
        </button>
        <button className="border w-auto h-full p-1 border-2 border-white shadow shadow-lg rounded">
          <MenuIcon />
        </button>
      </article>
    </header>
  );
}
