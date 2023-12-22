import React from 'react'
import Towing from '../../assets/images/moto-tow.jpeg'
export default function ServiceCard() {
    return (
            <section id="servicesCard" className='w-full h-full bg-white shadow-lg border-danger shadow-danger flex flex-col p-1 gap-2 rounded-lg'>
                        <figure className='w-full h-4/6 flex gap-3 justify-center items-center rounded-lg'>
                            <img id="" alt="service graphic" src={Towing} className='w-1/3 h-5/6 rounded-full bg-white object-cover aspect-square' />
                            <figcaption className='w-4/6 h-5/6 bg-white rounded-lg flex flex-col justify-center'>
                                <h3 className='w-full h-auto font-bold'>Services Title</h3>
                                <p>Service info</p>
                            </figcaption>
                        </figure>
                        <article id="servicesList" className='w-full h-full bg-white rounded-lg px-3'>
                            <ul className='w-full h-full flex flex-col'>
                                <li className='w-full h-full flex justify-start items-center'>
                                    <p>Bullet Point Example</p>
                                    </li>
                                <li className='w-full h-full flex justify-start items-center'>
                                    <p>Bullet Point Example</p>
                                    </li>
                                <li className='w-full h-full flex justify-start items-center'>
                                    <p>Bullet Point Example</p>
                                </li>
                            </ul>
                        </article>

            </section>
    )
}
