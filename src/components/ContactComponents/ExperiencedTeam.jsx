import { FaSquareFacebook,FaSquareTwitter,FaSquareGooglePlus } from "react-icons/fa6";

const ExperiencedTeam = () => {
    return (
        <section className="md:p-32 p-16">
            <div className="grid md:grid-cols-2 justify-items-center items-center gap-5 md:gap-0 container mx-auto">
                <div>
                    <h1 className="md:text-3xl text-xl font-semibold text-blue-500">Contact Our Experienced Team</h1>
                    <p className="md:text-sm text-xs mt-2 text-justify">Just send us your inquiries or concerns by starting a new case and we will give you the help you need.</p>
                    <button className="p-2 md:text-sm text-xs bg-blue-500 rounded-sm text-gray-100 mt-2 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition">Contact Us</button>
                </div>
                
                <div className="md:text-sm text-xs md:w-1/2 flex flex-col md:gap-2 gap-1">
                    <p className="font-semibold text-lg">CAZA Technology Solutions Inc.</p>
                    <p>Unit 707 Antel Corporate Center 121 Valero St., Salcedo Village Makati City, Philippines 1227</p>
                    <p>Phone: +632 8805 8476</p>
                    <p>Email: inquiry@cazatechnology.com</p>
                    <div className="flex gap-3">
                        <FaSquareFacebook className="text-blue-700" />    
                        <FaSquareTwitter className="text-blue-500" />
                        <FaSquareGooglePlus className="text-red-500" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperiencedTeam;