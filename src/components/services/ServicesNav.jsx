import React from 'react'

export default function ServicesNav() {
    return (
      <nav className="w-full h-14 bg-danger p-1 rounded-lg text-white">
        <ul className="w-full h-full flex justify-around items-center">
          <li className="w-full h-full p-2 flex items-center justify-center rounded-lg bg-white">
            <button className="w-full h-full text-black" onClick={""} value={true}>
              Services
            </button>
          </li>
          <li className="w-full h-full  p-2 flex items-center justify-center rounded-lg">
            <button className="w-full h-full" onClick={""} value={false}>
              Prices
            </button>
          </li>
          <li className="w-full h-full p-2 flex items-center justify-center rounded-lg">
            <button className="w-full h-full" onClick={""} value={false}>
              Services
            </button>
          </li>
        </ul>
      </nav>
    );
}
