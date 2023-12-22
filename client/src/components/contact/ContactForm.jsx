import React from 'react'
import EngineImage from "../../assets/images/engine.jpeg";

export default function ContactForm() {
    return (
         <form method="POST" action="" className='w-full h-full flex flex-col'>
            <legend className='w-full h-auto text-center flex items-center justify-center text-xl'>
                <p>Lets Get</p> 
                <span className='w-auto h-auto text-danger'>
                    <p>&nbsp;Connected!</p>
                </span>
                </legend>
            <fieldset id="nameField" className='w-full h-1/3  flex flex-col gap-2 justify-start items-center  p-1'>
                <label id="" className='w-full h-auto flex justify-start items-center'>Name</label>
                <input id="" className="w-full h-1/2 border rounded-lg shadow-lg shadow-danger px-2 p-1" type="" placeholder="Daniel Ducati" />
            </fieldset>
            <fieldset id="companyField" className='w-full h-1/3  flex flex-col gap-2 justify-start items-center p-1'>
                <label id="" className='w-full h-auto flex justify-start items-center'>Company</label>
                <input id="" className="w-full h-1/2 border rounded-lg shadow-lg shadow-danger px-2 p-1" type="text" placeholder="Squid Bros LLC" />
            </fieldset>
            <fieldset id="emailField" className='w-full h-1/3  flex flex-col gap-2 justify-start items-center p-1'>
                <label id="" className='w-full h-auto flex justify-start items-center'>Email</label>
                <input id="" className="w-full h-1/2 border rounded-lg px-2 p-1 shadow-lg shadow-danger" type="email" placeholder="DucatiGuy@gmail.com" />
            </fieldset>
            <fieldset id="messageField" className='w-full h-3/5  flex flex-col gap-2 justify-start items-center p-1'>
                <label id="" className='w-full h-auto flex justify-start items-center'>Message</label>
                <textarea id="" className="w-full h-3/4 border rounded-lg px-2 p-1 shadow-lg shadow-danger" type="" placeholder="Enter your message here" />
            </fieldset>
            <fieldset id="submitField" className="relative z-30 w-full h-1/5 flex justify-center items-center p-1">
                <submit className='relative z-30 w-full h-full flex justify-center items-center rounded-lg shadow-xl'>
                    <p className='relative z-30 h-full w-full text-white flex justify-center items-center text-xl'>Submit</p>
                    <img id="submitImage" className='absolute z-20 w-full h-full object-cover aspect-square rounded-lg' alt="motorcycle engine" src={EngineImage} />
                </submit>
            </fieldset>
        </form>
    )
}
