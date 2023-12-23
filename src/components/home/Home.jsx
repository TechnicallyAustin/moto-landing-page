import React from "react";
import Moto from "../../../public/images/moto-home.avif";
import ArrowIcon from "../../../public/icons/ArrowIcon";
import DoubleDownIcon from "../../../public/icons/DoubleDownIcon";

export default function Home() {
  return (
    <section
      id="home"
      className="relative top-0 w-full h-full flex flex-col text-white"
    >
      <figure id="" className="w-full h-full p-3 border flex flex-col">
        <figcaption className=" relative z-20 top-1/3 w-full h-auto flex flex-col gap-3">
          <h1 className="w-full h-full text-4xl shadow shadow-xl">
            Mobile Motorcycle Services
          </h1>
          <p className="w-full h-full text-xl shadow shadow-md">
            Help Where you need it, When you need it.
          </p>
          <article className="relative top-1/4 w-full h-full flex justify-center items-center gap-3">
            <button className="w-full p-3 px-2 h-full text-xl flex justify-center items-center rounded-lg bg-danger shadow shadow-lg">
              Services
            </button>
            <button className="w-full p-3 px-2 h-full text-xl flex justify-center items-center  shadow shadow-lg gap-1">
              Learn More
              <div className="w-auto flex items-center justify-center">
                <ArrowIcon />
              </div>
            </button>
          </article>
        </figcaption>
        <img
          className="w-full h-full object-cover absolute top-0 left-0 z-10"
          src={Moto}
          alt="motorcyle and mechanic"
        />
      </figure>

      <article className="relative z-20 bottom-0 w-full h-auto flex justify-center items-center p-3 animate-bounce">
        <DoubleDownIcon />
      </article>
    </section>
  );
}
