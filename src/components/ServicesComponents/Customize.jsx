import { FaLaptop,FaSearch,FaPaintBrush } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { useState } from 'react';

const Customize = () => {

    const [services,setServices] = useState([
        {
            id:1,
            icon: <FaPaintBrush />,
            title: 'Screen Design',
            description: 'Customize your VERSION, ENQUIRY, and other application screen'
        },
        {
            id:2,
            icon: <FaLaptop />,
            title: 'T24 Product Development',
            description: 'Develop T24 Products'
        },
        {
            id:3,
            icon: <IoCalendarOutline />,
            title: 'COB',
            description: 'Perform Close Of Business and other services'
        },
        {
            id:4,
            icon: <FaSearch />,
            title: 'Check',
            description: 'Check for issues and bugs'
        },
    ])

    return (
        <section className="p-32 bg-gray-100">
            <div className="w-full container mx-auto">
                <div className="flex justify-center">
                    <div className="w-1/2 self-center">
                        <h1 className="text-4xl text-gray-700 text-center font-semibold">We customize our services to meet your requirements</h1>
                        <p className="text-center text-gray-700 mt-4">Onsite and offsite implementation, development, and support services ensuring HIGH quality and cost-effective solutions. We also offer staff augmentation.</p>
                    </div>
                </div>

                <div className="flex justify-center items-stretch mt-20">
                    { services?.map(service => (
                        <div className="border border-gray-300 p-5 text-center w-full" key={service.id}>
                            <button className="text-5xl text-blue-500 border border-gray-200 bg-gray-100 p-5 rounded-full">{service.icon}</button>
                            <h2 className="mt-2 text-gray-700 font-semibold">{service.title}</h2>
                            <p className="mt-3 text-gray-700 text-sm">{service.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Customize;