import { useState } from 'react';
import { IoIosAnalytics } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { HiOutlineStar } from "react-icons/hi";

const GlobalBusiness = () => {

    const [businessServices,setBusinessServices] = useState([
        {
            id: 1,
            icon: <IoIosAnalytics />,
            title: 'Professional Growth',
            description: 'Build your professional growth with our training sessions'
        },
        {
            id: 2,
            icon: <FiTarget />,
            title: 'Research & Development',
            description: 'Research and development'
        },
        {
            id: 3,
            icon: <HiOutlineStar />,
            title: 'Valuable Services',
            description: 'Consultancy services'
        }
    ])

    return (
        <section className="p-32 global__bg">    
            <div className="container mx-auto">
                <h1 className="text-gray-100 text-4xl text-center font-semibold">Global Business Services</h1>
                
                <div className="flex justify-around items-stretch mt-10">
                    { businessServices?.map(businessService => (
                        <div className="p-5 text-center w-full text-gray-100" key={businessService.id}>
                            <button className="text-8xl p-5">{businessService.icon}</button>
                            <h2 className="mt-2 text-xl font-semibold">{businessService.title}</h2>
                            <p className="mt-1 text-sm">{businessService.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default GlobalBusiness;