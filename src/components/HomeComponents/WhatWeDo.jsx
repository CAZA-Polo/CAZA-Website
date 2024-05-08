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
        <section className="items-center justify-center gap-4 flex flex-col w-full md:p-18 p-10 what-we-do-bg">
            <div className="flex flex-col items-center gap-3 text-white">
                <h1 className="md:text-4xl text-3xl font-semibold">What We Do</h1>
                <p className="md:text-sm text-xs">We help the banks to customize their products and upgrade their systems.</p>

                <div className="flex md:flex-row flex-col md:items-stretch items-center justify-around gap-10 mt-10">
                    { events?.map(event => (
                        <div key={event.id} className="md:w-1/2 flex flex-col items-center gap-2">
                            <span className="text-5xl">{event.icon}</span>
                            <h2 className="flex items-center gap-2 md:text-xl text-lg font-semibold">{event.title}</h2>
                            <p className="md:text-sm text-xs text-center">{event.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;