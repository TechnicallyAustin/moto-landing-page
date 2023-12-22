import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
    const cName = children.type.name.toLowerCase();
    const title = children.type.name


  return (
    <section id={cName} className="w-full min-h-full flex flex-col p-3 gap-6">
      <header className="w-full h-1/5 flex flex-col gap-3 justify-start items-center bg-white relative z-40">
        {title == "About" && (
            <>
                    <h2 className="relative z-40 w-full h-auto text-3xl flex items-center">{title}</h2>
                    <div className="w-full h-1  z-30 bg-danger"></div>
                    <p className="relative z-40 w-full h-auto text-md shadow-xl p-3 bg-danger text-off-white rounded-lg shadow-md">Mobile Motorcycle services dedicated to keeping Motorcylists on their bikes and out of the Shop.</p>
            </>
        )}

        {title == "Services" && (
            <>
                <h2 className="relative z-40 w-full h-auto text-3xl flex items-center">{title }</h2>
                <div className="w-full h-1 bg-danger"></div>
                <p className="relative z-40 w-full h-auto text-md shadow-xl p-3 bg-danger text-off-white rounded-lg shadow-md">Keeping the rubber down can be more difficult than it needs to be. Here are a few ways we can help.</p>

            </>
        )}

        {title == "Team" && (
            <>
                <h2 className="relative z-40 w-full h-auto text-3xl flex items-center">{"Meet our Moto" + " " + title}</h2>
                <div className="w-screen h-1 bg-danger"></div>
                <p className="relative z-40 w-full h-auto text-md shadow-xl p-3 bg-danger text-off-white rounded-lg shadow-md">Experts coming together from different fields, focused on improving motorcycling reliability and daily quality of life for fellow riders.</p>

            </>
        )}

        {title == "Contact" && (
            <>
                <h2 className="relative z-40 w-full h-auto text-3xl flex items-center">{title}</h2>
                <div className="w-screen h-1 bg-danger"></div>
                <p className="relative z-40 w-full h-auto text-md shadow-xl p-3 bg-danger text-off-white rounded-lg shadow-md">Have an idea? Like our idea or want to collaborate? Just send us a message and let's talk about it.</p>
            </>
        )}



      </header>
      {children}
    </section>
  );
}
