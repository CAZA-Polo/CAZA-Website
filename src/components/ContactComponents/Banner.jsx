import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className="items-center justify-center gap-4 flex flex-col w-full md:p-24 p-10 contact__banner__bg">
            <div className="flex flex-col items-center gap-3 text-gray-100 container mx-auto">
                <motion.h1 
                initial={{opacity:0, y:-50}}
                animate={{opacity:1,y:0}} 
                transition={{duration:0.5}}
                className="font-semibold text-center md:text-4xl text-xl mt-10">CAZA Technology Solutions Inc.</motion.h1>
                <motion.p 
                initial={{opacity:0, y:20}}
                animate={{opacity:1,y:0}} 
                transition={{duration:0.5}}
                className="md:text-xl text-sm">Please don't hesitate to contact us!</motion.p>                        
            </div>
        </section>
    )
}

export default Banner;