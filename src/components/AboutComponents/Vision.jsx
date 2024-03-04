const Vision = () => {
    return (
        <section className="p-32 flex flex-col gap-20 container mx-auto">
            <div className="grid grid-cols-2 justify-items-center">
                <div>
                    <h1 className="text-3xl font-semibold text-blue-500">Our Vision</h1>
                    <p className="text-sm mt-2 text-justify text-gray-700">To b e the leading IT consultancy, services, and solutions provider to banking and finance institutions not only in the Philippines but throughout Asia Pacific and the rest of the world. We aim to provide good quality and cost effective services and solutions to our clients.</p>
                </div>      
                <img className="w-1/2" src="/images/about/ESTIEM_Vision_square.png" alt="Vision" /> 
            </div>  

            <div className="grid grid-cols-2 justify-items-center">
                <img className="w-1/2" src="/images/about/Point-of-difference.jpg" alt="Vision" />
                <div>
                    <h1 className="text-3xl font-semibold text-blue-500">What Makes us Different</h1>
                    <p className="text-sm mt-2 text-justify text-gray-700">CAZA was found in 2016 by banking and IT consultants with more than 20+ years of implementation experience of T24 corebanking solution throughout Asia Pacific and EMEA covering Retail Banking, Corporate Banking, Private Banking, Treasury, Islamic Banking, Microfinance, and Universal Banking.</p>
                </div>      
            </div>  

            <div className="grid grid-cols-2 justify-items-center">
                <div>
                    <h1 className="text-3xl font-semibold text-blue-500">Offerings</h1>
                    <ul className="list-disc text-justify text-sm">
                        <li>T24 implementation, development and support - both Onsite and Offsite</li>
                        <li>Staff Augmentation</li>
                        <li>Development of 3rd party solutions and interfaces with T24</li>
                        <li>Customized T24 technical training</li>
                    </ul>
                </div>      
                <img src="/images/about/communication.png" alt="Vision" /> 
            </div>  
            
        </section>
    )
}

export default Vision;