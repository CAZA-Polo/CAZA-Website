import { Carousel } from "react-responsive-carousel";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import animateHook from "../../hooks/animateHook";
import { useRef } from 'react';

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
            // photo: '/images/banking-banner.jpg'
        },
        {
            // photo: '/images/bg-patt.png'
        },
        {
            // photo: '/images/ten-reasons-internet-banking_opt.jpg'
        }
    ])

    return (    
        <div className="flex md:flex-row flex-col container h-screen mx-auto">
            <div className="flex flex-col justify-center gap-9 mb-14 text-gray-200 md:mx-80 md:w-auto">
                <motion.h1
                ref={ref}
                variants={titleVariant}
                initial="initial"
                animate={controls} 
                className="font-semibold text-center md:text-5xl md:font-semibold text-2xl">Implement T24 core banking solution to your organization</motion.h1>
                <motion.p
                ref={descRef} 
                variants={descVariant}
                initial="initial"
                animate={descControl} 
                className="text-center md:text-base text-xs">We help you to ensure successful implementation of your T24 core banking solution. We customize our services based on
                your requirements. We listen to your specific needs and deliver quality output that meet your criteria, expectation, budget, and deadline.
                </motion.p>

                <motion.div
                ref={descRef}  
                variants={descVariant}
                initial="initial"
                animate={descControl} 
                className="flex justify-center">
                    <Link to='/about' className="rounded-md md:w-1/4 w-1/3 bg-blue-500 md:p-2 p-1 text-center text-gray-100 hover:bg-transparent hover:border-blue-500 hover:border hover:text-blue-500 transition md:text-sm text-xs">Get Started</Link>
                    <Link to='/about' className="md:w-1/4 w-1/2 md:p-2 p-1 text-center text-gray-100 hover:text-blue-500 transition md:text-sm text-xs">Learn More →</Link>
                </motion.div >    

            <div className="">
                </div>                                

            </div>
            {/* <div className="md:w-1/2">
                <Carousel showThumbs={false} autoPlay={true} interval={2000} showArrows={false} swipeable={true} showIndicators={true} infiniteLoop showStatus={false}>
                    { images?.map((image,id) => (
                        <img key={id} className="md:h-[700px] h-[300px] md:object-fit object-cover" src={image.photo} alt="banners" />
                    )) }
                </Carousel>
            </div> */}
        </div>
    )
}

export default TopBanner;