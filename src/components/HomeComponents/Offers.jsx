import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from "react-icons/io";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

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
        <section className="md:p-24 p-10 container mx-auto">
            <div className="text-center flex justify-center">
                <div className="md:w-1/2">
                    <h1 className="md:text-5xl text-2xl font-semibold text-gray-700">What we offer</h1>
                    <p className="md:text-sm text-xs md:mt-5 mt-2">Onsite and offsite implementation development and support services ensuring quality and cost effective solutions.
                    We also offer staff augmentation.
                    </p>
                </div>
            </div>

            {/* For Desktop */}
            <div className="md:flex md:flex-wrap justify-center gap-5 mt-10 hidden">
                { offers?.map(offer => (
                    <div key={offer.id} className="flex flex-col transition w-1/4 border-2 h-auto border-blue-100 rounded-md shadow-lg overflow-hidden">
                        <div className="w-full h-full overflow-hidden">
                            <img className="w-full h-[199.29px] z-10 object-cover cursor-pointer hover:scale-110 transition" src={offer.bgImage} alt={offer.title} />
                        </div>

                        <div className="p-3 flex flex-col justify-between h-full">
                            <div>
                                <h2 className="font-semibold md:text-lg text-sm">{offer.title}</h2>
                                <p className="md:text-sm text-xs text-justify">{offer.description}</p>
                            </div>

                            <Link className="mt-3 md:text-sm text-xs text-blue-500 flex items-center gap-1 hover:underline transition font-semibold" to="/services"><IoIosArrowDropright />Learn more</Link>
                        </div>
                    </div>
                )) }
            </div>

            {/* For Mobile */}
            <Carousel className="mt-12 md:hidden block rounded-md overflow-hidden" autoPlay={true} infiniteLoop={true} showThumbs={false} swipeable={true} showIndicators={false}>
                { offers?.map(offer => (
                    <div key={offer.id} className="flex flex-col transition h-full w-full border border-gray-200 rounded-md overflow-hidden">
                        <img className="w-full h-[191.29px] object-cover" src={offer.bgImage} alt={offer.title} />

                        <div className="p-3 flex flex-col justify-between h-full">
                            <div>
                                <h2 className="font-semibold md:text-lg text-sm text-start">{offer.title}</h2>
                                <p className="md:text-sm text-xs text-justify">{offer.description}</p>
                            </div>

                            <Link className="mt-3 md:text-sm text-xs text-blue-500 flex items-center gap-1 hover:underline transition font-semibold" to="/services"><IoIosArrowDropright />Learn more</Link>
                        </div>
                    </div>
                )) }
            </Carousel>
        </section>
    )
}

export default Offers;  