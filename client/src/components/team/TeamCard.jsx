import React from 'react'
import Port from "../../assets/images/tech-port.jpeg";
import TwitterIcon from '../../assets/icons/XIcon';
import LinkedinIcon from '../../assets/icons/LinkedinIcon';
import XIcon from '../../assets/icons/XIcon';
import GithubIcon from '../../assets/icons/GithubIcon';


export default function TeamCard() {
    return (
        <section className='w-full h-60 flex shadow-danger shadow-lg rounded-lg  flex'>
            <figure className='w-full h-full  flex flex-col gap-1'>
                <img id="" alt="" src={Port} className='w-full h-3/4  shadow object-cover aspect-square rounded-t-lg' />
                <figcaption className='w-auto h-auto grid grid-cols-max p-1'>
                    <h3 className='w-full h-full font-bold col-start-1'>Member Name</h3>
                    <p className='w-full h-full col-start-1'>Team Position</p>
                    <ul className='w-full h-full flex col-start-2 row-span-2 row-start-1 justify-around items-center' >
                        <li className='w-1/3 h-1/3 flex items-center justify-center '>
                            <button className='w-full h-full flex items-center'>
                                <GithubIcon />
                            </button>
                            
                            </li>
                        <li className='w-1/3 h-1/3 flex items-center justify-center '>
                            <button className='w-full h-full flex items-center'>
                                <LinkedinIcon />
                            </button>
                            
                            </li>
                        <li className='w-1/3 h-1/3 flex items-center justify-center '>
                            <button className='w-full h-full flex items-center'>
                                <XIcon />
                            </button>
                        
                            </li>
                    </ul>
                </figcaption>
            
            </figure>

        </section>
    );
}
