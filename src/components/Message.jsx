import { FaSquareFacebook,FaSquareTwitter,FaSquareGooglePlus } from "react-icons/fa6";

const Message = () => {
    return (
        <section className="md:p-24 p-7">
           <div className="container mx-auto grid md:grid-cols-5 gap-10 md:gap-0 bg-gray-100 rounded-md p-5">
                <form className="border border-gray-300 md:col-span-2 col-span-3 p-5 md:w-3/4 w-full flex flex-col gap-5 overflow-hidden shadow-lg rounded-md order-last md:order-first">
                    <div>
                        <h1 className="md:text-3xl text-xl font-semibold text-gray-700">Message Us</h1>
                        <span className="text-xs text-gray-700">Please don't hesitate to message us</span>
                    </div>
                    <div className="flex flex-col text-gray-700">
                        <label className="md:text-sm text-xs" htmlFor="name">Name</label>
                        <input className="p-2 border border-gray rounded-sm outline-none md:placeholder:text-sm placeholder:text-xs text-sm text-black" placeholder="Your name" type="text" />
                    </div>
                    <div className="flex flex-col text-gray-700">
                        <label className="md:text-sm text-xs" htmlFor="email">Email Address</label>
                        <input className="p-2 rounded-sm outline-none md:placeholder:text-sm placeholder:text-xs text-sm text-black" placeholder="Your email" type="email" />
                    </div>
                    <div className="flex flex-col text-gray-700">
                        <label className="md:text-sm text-xs" htmlFor="subject">Subject</label>
                        <input className="p-2 rounded-sm outline-none md:placeholder:text-sm placeholder:text-xs text-sm text-black" placeholder="Enter subject" type="text" />
                    </div>
                    <div className="flex flex-col text-gray-700">
                        <label className="md:text-sm text-xs" htmlFor="name">Message</label>
                        <textarea className="p-2 rounded-sm md:text-sm text-xs outline-none text-black"></textarea>
                    </div>

                    <button className="bg-white w-1/4 text-sm p-2 rounded-md text-blue-500">Send</button>
                </form>

                <div className="flex flex-col md:gap-10 gap-5 col-span-3 justify-center">
                    <div>
                        <h1 className="md:text-3xl text-xl font-semibold text-blue-500">Contact Our Experienced Team</h1>
                        <p className="md:text-sm text-xs mt-2 text-justify text-gray-700">Just send us your inquiries or concerns by starting a new case and we will give you the help you need.</p>
                        {/* <button className="p-2 text-sm bg-blue-500 rounded-sm text-gray-100 mt-2 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition">Contact Us</button> */}
                    </div>
                    <div className="text-xs md:text-sm md:w-1/2 flex flex-col gap-2 text-gray-700">
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
           </div>
        </section>
    )
}

export default Message;