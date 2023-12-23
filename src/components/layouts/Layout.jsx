import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  
  const headerStyles = {
    about: {
      title: "About",
      description: "Mobile Motorcycle services dedicated to keeping Motorcyclists on their bikes and out of the Shop.",
    },
    services: {
      title: "Services",
      description: "Keeping the rubber down can be more difficult than it needs to be. Here are a few ways we can help.",
    },
    team: {
      title: "Team",
      description: "Experts coming together from different fields, focused on improving motorcycling reliability and daily quality of life for fellow riders.",
    },
    contact: {
      title: "Contact",
      description: "Have an idea? Like our idea or want to collaborate? Just send us a message and let's talk about it.",
    },
  };
  
  const title = children.type.name;
  const key =  headerStyles[title.toLowerCase()] || {};
  const description = key["description"]
  console.log(title, description)

  return (
    <section
      id={title.toLowerCase()}
      className="w-full min-h-full flex flex-col p-3 gap-6"
    >
      <header className="w-full h-auto flex flex-col gap-3 justify-start items-center bg-white relative z-40">
        <h2 className="relative z-40 w-full h-auto text-3xl flex items-center">{title}</h2>
        <div className="w-full h-1 bg-danger"></div>
        <h3 className="relative z-40 w-full h-2/3 text-md shadow-xl p-3 bg-danger text-off-white rounded-lg shadow-md">{description}</h3>
      </header>
      {children}
    </section>
  );
}
