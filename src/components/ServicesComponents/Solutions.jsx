import { useState } from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {

    const [services,setServices] = useState([
        {
            id: 1,
            title: 'Staff Augmentation',
            description: 'Providing highly skilled, well trained, and experienced T24 consultants to meet the day-to-day IT operational requirements of our clients.',
            bgColor: 'bg-sky-300'
        },
        {
            id: 2,
            title: 'Onsite Services',
            description: 'T24 onsite implementation, development, and support ensuring quality and on-time delivery of projects',
            bgColor: 'bg-sky-500'
        },
        {
            id: 3,
            title: 'Offsite Services',
            description: 'T24 offsite development and support. Our offshore model service is a cost effective solution to meet our client\'s requirements',
            bgColor: 'bg-sky-300'
        },
        {
            id: 4,
            title: '3rd Party Solutions and Interfaces',
            description: 'Development of 3rd party solutions and interfaces with T24 core banking using the latest technology and compliance with security and coding standards.',
            bgColor: 'bg-sky-500'
        },
        {
            id: 5,
            title: 'Skills Enablement and Bootcamp Partnership Programs',
            description: 'Provide customer with a customized T24 technical training to build a strong and more engaged workforce during and post implementation',
            bgColor: 'bg-sky-300'
        },
    ]);

    return (
        <section className="container mx-auto">
            { services?.map(service => (
                <div key={service.id} className={`flex ${ service.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row' } ${service.bgColor}`}>
                    <div className={`md:p-24 p-10 md:w-1/2 w-full ${service.id % 2 !== 0 ? 'bg-sky-500 md:bg-gray-100' : 'bg-gray-100 md:bg-none'}`}>
                        <h1 className={`font-semibold md:text-3xl text-xl md:text-gray-700 ${service.id % 2 !== 0 ? 'text-white' : ''}`}>{service.title}</h1>
                        <p className={`md:text-sm text-xs md:text-gray-700 text-justify mt-3 ${service.id % 2 !== 0 ? 'text-white' : ''}`}>{service.description}</p>
                        {/* <button className="p-2 text-sm bg-blue-500 rounded-sm text-gray-100 mt-2 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition">
                            <Link to='/contact'>Contact Us</Link>
                        </button> */}
                    </div>
                </div>
            )) }
        </section>
    )
}

export default Solutions;