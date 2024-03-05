import { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';

const GreatService = () => {

    const [buttons,setButtons] = useState([
        {
            id: 1,
            title: 'Support',
            description: 'Tailored solutions, to give you the flexibility to choose the level of support you need.'
        },
        {
            id: 2,
            title: 'Training',
            description: 'Learn about T24 Banking Solutions training and certification'
        },
        {
            id: 3,
            title: 'Services',
            description: 'Unparalleled expertise in making software solutions go further, work harder and deliver more'
        }
    ]);

    const [currentBtn,setCurrentBtn] = useState('Support');
    const [currVal,setCurrVal] = useState('');

    return (
        <section className="md:p-32 p-16 h-[500px] grid md:grid-cols-2 container mx-auto">
            <div className="flex flex-col justify-center">
                <div className="text-gray-700">
                    <h1 className="font-semibold md:text-3xl text-xl">We are providing great services</h1>
                    <p className="text-justify md:text-sm text-xs mt-2">CAZA Technology Solutions Inc. offer the full spectrum of services to help organizations work better.
                    Everything from creating standards of excellence to training your people to work in more effective ways.
                    Implementation, performance optimisation, integration, administration, maintenance, upgrade, training, and 
                    support are all part of the comprehensive service.
                    </p>
                </div>

                <div className="mt-5">
                    <div className="flex items-center">
                    { buttons?.map(button => (
                        <button key={button.id} onClick={() => setCurrentBtn(button.title)} className={`${ button.title === currentBtn ? 'bg-blue-500 text-white' : '' } border w-full hover:text-white hover:bg-blue-500 transition text-blue-500 border-gray-300 md:p-2 p-1 cursor-pointer md:text-sm text-xs`}>{button.title}</button>
                    )) }
                    </div>

                    {/* Create entrance and exit animation on text */}
                    <AnimatePresence>
                        <motion.p 
                        key={currentBtn}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{ delay: 0.2 }}
                        className="md:text-sm text-xs text-gray-700 mt-3 transition">{ buttons.filter(button => button.title === currentBtn).map(button => button.description) }</motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
export default GreatService;