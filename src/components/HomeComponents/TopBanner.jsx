import { Carousel } from "react-responsive-carousel";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import animateHook from "../../hooks/animateHook";

const titleVariant = {
    initial: { opacity:0, y:-50, transition:{ duration:0.5 } },
    animate: { opacity:1,y:0, transition:{ duration:0.5 } }
}   

const descVariant = {
    initial: { opacity:0, y:20, transition:{ duration:0.5 } },
    animate: { opacity:1,y:0, transition:{ duration:0.5 } }
}

const TopBanner = () => {

    const { ref,controls } = animateHook(titleVariant.animate, titleVariant.initial);
    const { ref:descRef,controls:descControl } = animateHook(descVariant.animate,descVariant.initial);

    const [images,setImages] = useState([
        {
            photo: '/images/hm-2.jpg'
        },
        {
            photo: '/images/new-caza.jpg'
        },
        {
            photo: '/images/hm-1.jpg'
        }
    ])

    return (
        <div className="flex md:flex-row flex-col container mx-auto">
            <div className="flex flex-col justify-center gap-7 p-8 text-gray-700 md:w-1/2">
                <motion.h1
                ref={ref}
                variants={titleVariant}
                initial="initial"
                animate={controls} 
                className="font-semibold text-left md:text-5xl text-2xl">Welcome to CAZA Technology Solutions Inc.</motion.h1>
                <motion.p
                ref={descRef} 
                variants={descVariant}
                initial="initial"
                animate={descControl} 
                className="text-left md:text-sm text-xs">We help you to ensure successful implementation of your T24 core banking solution. We customize our services based on
                your requirements. We listen to your specific needs and delivery quality that meet your criteria, expectation, budget, and deadline.
                We help to keep you focused ensuring T24 best practices are aligned to your business needs. We invite you to contact us to see how 
                our services can benefit your organization.
                </motion.p>

                <motion.div
                ref={descRef}  
                variants={descVariant}
                initial="initial"
                animate={descControl} 
                className="flex justify-start">
                    <Link to='/about' className="rounded-md md:w-1/4 w-1/3 bg-blue-500 md:p-2 p-1 text-center text-gray-100 hover:bg-transparent hover:border-blue-500 hover:border hover:text-blue-500 transition md:text-sm text-xs">Read More</Link>
                </motion.div >                                    

            </div>

            {/* for desktop view */}
            <div className="hidden md:w-1/2 rounded h-auto md:flex items-center justify-center p-5">
                <div className="relative flex flex-col w-[90%] items-center justify-center h-[690px]">
                    <img className="md:rounded-lg md:h-[300px] w-[250px] h-[300px] object-cover absolute z-50" src={images[1].photo}/>
                    <img className="md:rounded-lg md:h-[300px] w-[250px] h-[300px] object-cover absolute top-0 left-0" src={images[0].photo}/>
                    <img className="md:rounded-lg md:h-[300px] w-[250px] h-[300px] object-cover absolute bottom-0 right-0" src={images[2].photo}/>
                </div>
            </div>

            {/* for mobile view */}
            <Carousel showThumbs={false} className="md:hidden block"> 
                {images.map((image,key) => (
                    <img key={key} className="md:rounded-lg md:h-[300px] md:w-[250px] h-[300px] object-cover" src={image.photo}/>
                ))}
            </Carousel>
        </div>
    )
}

export default TopBanner;