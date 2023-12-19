import React from 'react'
import TeamCard from './TeamCard';



export default function Team() {
    return (
      <section
        id="teamSection"
        className="w-full border bg-white p-6 flex flex-col gap-12 rounded-lg ">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </section>
    );
}
