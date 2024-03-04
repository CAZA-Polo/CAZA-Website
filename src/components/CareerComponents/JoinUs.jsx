import { FaCheck } from "react-icons/fa";

const JoinUs = () => {
    
    return (
        <>
        <section className="p-32 bg-gray-100">
            <div className="w-full container mx-auto">
                <div className="grid grid-cols-2 p-2 gap-20">
                    <div>
                        <h1 className="text-4xl text-gray-700 font-semibold">Come work with us</h1>
                        <p className="text-justify text-gray-700 mt-4 text-sm">CAZA Technology Solutions Inc. is a core banking consultancy services company founded by banking and IT solution consultants with more than 20+ years of experience throughout Asia, Europe, and Middle East</p>
                    </div>

                    <div>
                        <h1 className="text-4xl text-gray-700 font-semibold">Why Join Us?</h1>
                        <p className="text-justify text-gray-700 mt-4 text-sm">Be trained and gain exposure to one of the best core banking solution available in the market. Your skills be honed in becoming an effective core banking consultant.</p>

                        <ul className="text-sm mt-4">
                            <li className="flex items-center gap-2"><FaCheck className="text-blue-500" /> Champion the mission</li>
                            <li className="flex items-center gap-2"><FaCheck className="text-blue-500" /> Great career options</li>
                            <li className="flex items-center gap-2"><FaCheck className="text-blue-500" /> Full flexibility of life</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full p-24 joinus__bg">
            <div className="text-gray-100 grid grid-cols-3 justify-items-center items-center container mx-auto">
                <span className="font-semibold text-5xl h-44 border-4 col-span-1 border-white w-44 flex items-center justify-center rounded-full bg-white bg-opacity-45">100%</span>
                <p className="text-lg col-span-2"><b>CAZA Technology Solutions Inc.</b> deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We strive to support the stakeholders in all activities related to us.</p>                        
            </div>
        </section>
        </>
        
    )
}

export default JoinUs;