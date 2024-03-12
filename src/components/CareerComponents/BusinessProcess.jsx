import { useState } from 'react';
import { LuLink } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { BsPersonStanding } from "react-icons/bs";
import { TbMessageCircleStar } from "react-icons/tb";
import { PiClockCountdownBold } from "react-icons/pi";
import { LuPhoneIncoming } from "react-icons/lu";
import { FaPercentage } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
const BusinessProcess = () => {

    const [processes,setProcesses] = useState([
        {
            id: 1,
            icon: <LuLink />,
            title: 'Delivery Manager',
        },
        {
            id: 2,
            icon: <GrGroup />,
            title: 'Project Manager',
        },
        {
            id: 3,
            icon: <BsPersonStanding />,
            title: 'Business Consultant',
        },
        {
            id: 4,
            icon: <TbMessageCircleStar />,
            title: 'Technical Consultant',
        },
        {
            id: 5,
            icon: <PiClockCountdownBold />,
            title: 'Marketing',
        },
        {
            id: 6,
            icon: <LuPhoneIncoming />,
            title: 'Pre-Sales',
        },
        {
            id: 7,
            icon: <FaPercentage />,
            title: 'Training Consultant',
        },
        {
            id: 8,
            icon: <FaConnectdevelop />,
            title: 'Developer',
        }
    ]);

    return (
        <section className="md:p-24 p-10 bg-gray-100 container mx-auto">
            <h1 className="md:text-4xl text-xl font-semibold text-gray-700 text-center">Our Business Process</h1>
            <div className="md:grid md:grid-cols-4 md:justify-items-stretch gap-5 md:mt-10 hidden">
                { processes?.map(process => (
                    <div key={process.id} className="flex items-center gap-2 justify-center flex-col shadow-lg border bg-white border-gray-300 rounded-md px-3 py-10">
                        <span className="text-5xl text-blue-500">{process.icon}</span>
                        <p className="text-sm">{process.title}</p>
                    </div>
                )) }
            </div>

            <Carousel className="gap-5 mt-10 md:hidden -mx-5" autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} swipeable={true} showThumbs={false}>
                { processes?.map(process => (
                    <div key={process.id} className="flex items-center gap-2 justify-center flex-col shadow-lg border bg-white border-gray-300 rounded-md px-3 py-10">
                        <span className="md:text-5xl text-4xl text-blue-500">{process.icon}</span>
                        <p className="md:text-sm text-xs">{process.title}</p>
                    </div>
                )) }
            </Carousel>
        </section>
    )
}

export default BusinessProcess;