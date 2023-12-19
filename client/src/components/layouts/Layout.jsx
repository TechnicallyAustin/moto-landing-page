import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
    const cName = children.type.name.toLowerCase();
    const title = children.type.name


  return (
    <section id={cName} className="w-full min-h-full flex flex-col p-3 gap-6">
      <header className="w-full h-1/5 flex flex-col justify-start items-center bg-white">
        {title == "About" && (
            <>
                <h2 className="w-full h-full text-3xl flex items-center">{title}</h2>
                <p className="w-full h-auto">Mobile Motorcycle services dedicated to keeping Motorcylists on their bikes and out of the Shop.</p>

            </>
        )}

        {title == "Services" && (
            <>
                <h2 className="w-full h-full text-3xl flex items-center">{title }</h2>
                <p className="w-full h-auto text-md">Keeping the rubber down can be more difficult than it needs to be. Here are a few ways we can help.</p>

            </>
        )}

        {title == "Team" && (
            <>
                <h2 className="w-full h-full text-3xl flex items-center">{"Meet our Moto" + " " + title}</h2>
                <p className="w-full h-auto text-md">Experts coming together from different fields, focused on improving motorcycling reliability and daily quality of life for fellow riders.</p>
            </>
        )}

        {title == "Contact" && (
            <>
                <h2 className="w-full h-full text-3xl flex items-center">{title}</h2>
                <p className="w-full h-auto">Have an idea? Like our idea or want to collaborate? Just send us a message and let's talk about it.</p>

            </>
        )}



      </header>
      {children}
    </section>
  );
}
