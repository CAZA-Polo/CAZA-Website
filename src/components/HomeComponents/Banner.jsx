import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {

    return (
        <section className="items-center justify-center gap-4 flex flex-col w-full md:p-24 p-12 md:container md:mx-auto">
            <div className="flex flex-col gap-4 text-gray-700 md:w-1/2">
                <motion.h1
                initial={{opacity:0, y:-50}}
                animate={{opacity:1,y:0}} 
                transition={{duration:0.5}}
                className="font-semibold text-center md:text-5xl text-2xl">Welcome to CAZA Technology Solutions Inc.</motion.h1>
                <motion.p 
                initial={{opacity:0, y:20}}
                animate={{opacity:1,y:0}} 
                transition={{duration:0.5}}
                className="text-center md:text-sm text-xs">We help you to ensure successful implementation of your T24 core banking solution. We customize our services based on
                your requirements. We listen to your specific needs and delivery quality that meet your criteria, expectation, budget, and deadline.
                We help to keep you focused ensuring T24 best practices are aligned to your business needs. We invite you to contact us to see how 
                our services can benefit your organization.
                </motion.p>

                <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1,y:0}} 
                transition={{duration:0.5}}
                className="flex justify-center">
                    <Link to='/about' className="rounded-md w-1/2 bg-blue-500 md:p-2 p-1 text-center text-gray-100 hover:bg-transparent hover:border-blue-500 hover:border hover:text-blue-500 transition md:text-sm text-sm">Read More</Link>
                </motion.div >                                    

            </div>
        </section>
    )
}

export default Banner;