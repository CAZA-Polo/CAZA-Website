import { motion } from 'framer-motion';
const Banner = () => {
    return (
        <section className="items-center justify-center gap-4 flex flex-col w-full p-32 h-full absolute top-0 bg-gray-200">
            <div className="flex flex-col items-center justify-center gap-3 text-gray-700">
                <motion.h1 
                initial={{opacity:0, y:-50}}
                animate={{opacity:1,y:0}} 
                transition={{duration:0.5}}
                className="font-semibold text-center text-4xl mt-10">CAZA Technology Solutions Inc.</motion.h1>
                <motion.p 
                initial={{opacity:0, y:20}}
                animate={{opacity:1,y:0}} 
                transition={{duration:0.5}}
                className="text-lg">We're still customizing our product page. Thank you for being patient.</motion.p>                        
            </div>
        </section>
    )
}

export default Banner;