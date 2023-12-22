import React from 'react'
import ServicesNav from './ServicesNav'
import ServiceCard from './ServiceCard'

export default function Services() {
    return (
        <section id="services" className='w-full'>
                <ServicesNav />
            <section className='w-full flex flex-col p-1 gap-3'>

                <section id="servicesTab" className='w-full p-3 flex flex-wrap gap-12'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </section>
            </section>
        </section>
    )
}
