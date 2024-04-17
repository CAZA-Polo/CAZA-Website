import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className="items-center justify-center gap-4 flex flex-col w-full p-32 aboutus__bg">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-3 text-gray-100">
                    <motion.h1 
                    initial={{opacity:0, y:-50}}
                    animate={{opacity:1,y:0}} 
                    transition={{duration:0.5}}
                    className="font-semibold text-center md:text-5xl text-xl md:mb-24">About Us</motion.h1>
                    <motion.p 
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1,y:0}} 
                    transition={{duration:0.5}}
                    className="md:text-xl text-sm"></motion.p>                        
                </div>
            </div>
        </section>
    )
}

export default Banner;