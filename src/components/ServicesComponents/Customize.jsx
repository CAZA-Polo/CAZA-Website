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
        <section className="md:p-24 p-10 bg-gray-100">
            <div className="w-full container mx-auto">
                <div className="flex justify-center">
                    <div className="md:w-1/2 self-center">
                        <h1 className="md:text-4xl text-xl text-gray-700 text-center font-semibold">We customize our services to meet your requirements</h1>
                        <p className="text-center text-gray-700 md:mt-4 mt-2 md:text-base text-xs">Onsite and offsite implementation, development, and support services ensuring HIGH quality and cost-effective solutions. We also offer staff augmentation.</p>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col justify-center items-stretch md:mt-20 mt-10">
                    { services?.map(service => (
                        <div className="border border-gray-300 p-5 text-center w-full" key={service.id}>
                            <button className="md:text-5xl text-4xl text-blue-500 border border-gray-200 bg-gray-100 p-5 rounded-full">{service.icon}</button>
                            <h2 className="mt-2 text-gray-700 font-semibold md:text-base text-sm">{service.title}</h2>
                            <p className="md:mt-3 mt-1 text-gray-700 md:text-sm text-xs">{service.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Customize;