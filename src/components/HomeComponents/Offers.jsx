import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from "react-icons/io";

const Offers = () => {

    const [offers,setOffers] = useState([
        {
            id: 1,
            title: 'Staff Augmentation',
            description:'Providing highly skilled, well trained, and experienced T24 consultants to meet the day to day IT operational requirements of our clients.',
            bgImage: './images/offers/office-workers-banner.jpg'
        },
        {
            id: 2,
            title: 'Onsite Services',
            description:'T24 onsite implementation, development, and support ensuring quality and on-time delivery of projects.',
            bgImage: './images/offers/maintenance_man.jpg'
        },
        {
            id: 3,
            title: 'Offsite Services',
            description:'T24 offsite development and support. Our offshore model service is a cost effective solution to meet our clients requirements.',
            bgImage: './images/offers/DSC0073.jpg'
        },
        {
            id: 4,
            title: '3rd Party Solutions and Interfaces',
            description:'Development of 3rd party solutions and interfaces with T24 system core banking using the latest technology and compliance with security and coding standards.',
            bgImage: './images/offers/third-party-app-integration.png'
        },
        {
            id: 5,
            title: 'Skills Enablement and Bootcamp Partnership Programs',
            description:'Provide customer with a customized T24 technical training to build a strong and more engaged workforce during and post implementation.',
            bgImage: './images/offers/ejkoobxlfcys9tqxpvf4.jpg'
        }

    ])

    return (
        <section className="p-24 py-10">
            <div className="mt-5 text-center flex justify-center">
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold text-gray-700">What we offer</h1>
                    <p className="text-sm">Onsite and offsite implementation development and support services ensuring quality and cost effective solutions.
                    We also offer staff augmentation.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 justify-items-center gap-5 mt-10">
                { offers?.map(offer => (
                    <div key={offer.id} className="flex flex-col hover:scale-105 transition w-full border border-gray-100 rounded-md shadow-lg overflow-hidden">
                        <img className="w-full h-[191.29px] object-cover" src={offer.bgImage} alt={offer.title} />

                        <div className="p-3">
                            <h2 className="font-semibold">{offer.title}</h2>
                            <p className="text-sm text-justify">{offer.description}</p>

                            <Link className="mt-3 text-sm text-blue-500 flex items-center gap-1 hover:underline transition font-semibold" to="#"><IoIosArrowDropright />Learn more</Link>
                        </div>
                    </div>
                )) }
            </div>
        </section>
    )
}

export default Offers;  