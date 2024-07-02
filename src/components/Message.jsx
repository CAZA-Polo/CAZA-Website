import React, { useState } from 'react';
import { FaSquareFacebook, FaSquareTwitter, FaSquareGooglePlus } from "react-icons/fa6";
import emailjs from 'emailjs-com';

const Message = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send('service_rkfj0rr', 'template_yw3bi8p', formData, 'Rinm4lief6ifbvsZ0')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, (error) => {
                console.log('FAILED...', error);    
            });
    };

    return (
        <section className="md:p-24 p-7 bg-gray-50">
            <div className="container mx-auto grid md:grid-cols-5 gap-10 bg-white rounded-md shadow-lg p-6">
                <form onSubmit={handleSubmit} className="border border-gray-300 md:col-span-2 col-span-3 p-6 flex flex-col gap-6 shadow-md rounded-md">
                    <div>
                        <h1 className="md:text-3xl text-2xl font-bold text-gray-800">Message Us</h1>
                        <span className="text-sm text-gray-600">We'd love to hear from you!</span>
                    </div>
                    <div className="flex flex-col">
                        <label className="md:text-sm text-xs text-gray-700" htmlFor="name">Name</label>
                        <input
                            className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition"
                            placeholder="Your name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="md:text-sm text-xs text-gray-700" htmlFor="email">Email Address</label>
                        <input
                            className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition"
                            placeholder="Your email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="md:text-sm text-xs text-gray-700" htmlFor="subject">Subject</label>
                        <input
                            className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition"
                            placeholder="Enter subject"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="md:text-sm text-xs text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition"
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition" type="submit">Send</button>
                </form>

                <div className="flex flex-col md:gap-10 gap-6 col-span-3 justify-center p-6">
                    <div>
                        <h1 className="md:text-3xl text-2xl font-bold text-blue-500">Contact Our Experienced Team</h1>
                        <p className="md:text-base text-sm mt-3 text-gray-600">Just send us your inquiries or concerns by starting a new case and we will give you the help you need.</p>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-3 text-gray-700">
                        <p className="font-bold text-lg">CAZA Technology Solutions Inc.</p>
                        <p className="text-sm">Unit 707 Antel Corporate Center 121 Valero St., Salcedo Village Makati City, Philippines 1227</p>
                        <p className="text-sm">Phone: +632 8805 8476</p>
                        <p className="text-sm">Email: inquiry@cazatechnology.com</p>
                        <div className="flex gap-4 mt-3">
                            <FaSquareFacebook className="text-blue-700 text-2xl cursor-pointer hover:text-blue-800 transition" />    
                            <FaSquareTwitter className="text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition" />
                            <FaSquareGooglePlus className="text-red-500 text-2xl cursor-pointer hover:text-red-600 transition" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Message;
