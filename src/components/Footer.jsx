import { FaSquareFacebook,FaSquareTwitter,FaSquareGooglePlus } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900">
            <div className="flex gap-10 p-16 items-stretch justify-around text-gray-300 container mx-auto">
                <div>
                    <img className="object-fit w-64" src="/images/CAZA_Transparent.png" alt="CAZA Logo" />
                </div>

                <div>
                    <h1 className="font-semibold text-lg">Useful Links</h1>
                    <ul className="text-sm">
                        <li className="hover:underline transition cursor-pointer">About Us</li>
                        <li className="hover:underline transition cursor-pointer">Project</li>
                        <li className="hover:underline transition cursor-pointer">Career</li>
                        <li className="hover:underline transition cursor-pointer">FAQ</li>
                        <li className="hover:underline transition cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-semibold text-lg">Get In Touch</h1>
                    <div className="text-sm">
                        <p>CAZA Technology Solutions Inc.</p>
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

            <div className="text-center bg-gray-800 p-5">
                <p className="text-gray-100 text-sm">Copyright &copy; 2018 All Rights Reserved | CAZA Technology Solutions Inc.</p>
            </div>
        </footer>
    )
}

export default Footer;