import { useState } from 'react';
import { FaBriefcase } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaRegLifeRing } from "react-icons/fa";

const WhatWeDo = () => {

    const [events,setEvents] = useState([
        {
            id: 1,
            title: 'Workspace',
            description: 'Working effectively with little direction',
            icon: <FaBriefcase />
        },
        {
            id: 2,
            title: 'Knowledge Learning',
            description: 'Learn handling errors and proper methods of executing applications',
            icon: <HiQuestionMarkCircle />
        },
        {
            id: 3,
            title: 'Help',
            description: 'Providing the best quality of services the customer needs',
            icon: <FaRegLifeRing />
        },
    ])

    return (
        <section className="items-center justify-center gap-4 flex flex-col w-full p-16 what-we-do-bg">
            <div className="flex flex-col items-center gap-3 text-white">
                <h1 className="text-4xl font-semibold">What We Do</h1>
                <p className="text-sm">We help the banks to customize their products and upgrade their systems.</p>

                <div className="flex items-stretch justify-around gap-10 mt-10">
                    { events?.map(event => (
                        <div key={event.id} className="w-1/2">
                            <h2 className="flex items-center gap-2 text-xl font-semibold">{event.icon} {event.title}</h2>
                            <p className="text-sm">{event.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;