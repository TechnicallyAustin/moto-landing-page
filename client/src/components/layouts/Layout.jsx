import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
    const cName = children.type.name.toLowerCase();
    const title = children.type.name

  return (
    <section id={cName} className="w-full h-full flex flex-col p-3 gap-6">
        <header className="w-full h-1/5 flex justify-start items-center bg-white">
            <h2 className="w-full h-full text-3xl flex items-center">{title}</h2>
        </header>
        {children}

    </section>
  );
}
