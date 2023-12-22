import React from 'react'

import ContactForm from './ContactForm'

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault
    }
    return (
        <section id="contact" className='w-full h-full p-1 bg-transparent'>
               <ContactForm />
        </section>
    )
}
