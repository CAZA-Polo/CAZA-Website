import { useState } from 'react';

const Stories = () => {

    const [stories,setStories] = useState([
        {
            id: 1,
            title: 'Our History',
            description: 'CAZA was found in 2016 by banking and IT consultants with more than 20+ years of implementation experience of T24 corebanking solution throughout Asia Pacific and EMEA covering Retail Banking, Corporate Banking, Private Banking, Treasury, Islamic Banking, Microfinance, and Universal Banking.',
        },
        {
            id: 2,
            title: 'Our Vision',
            description: 'To be the leading IT consultancy, services, and solutions provider to banking and finance institutions not only in the Philippines but throughout Asia Pacific and the rest of the world. We aim to provide good quality and cost effective services and solutions to our clients.'
        },
        {
            id: 3,
            title: 'What Makes Us Different',
            description: 'CAZA was found in 2016 by banking and IT consultants with more than 20+ years of implementation experience of T24 corebanking solution throughout Asia Pacific and EMEA covering Retail Banking, Corporate Banking, Private Banking, Treasury, Islamic Banking, Microfinance, and Universal Banking.'
        }
    ]);

    const [offers,setOffers] = useState([
        {
            id: 1,
            title: 'Virtual Training Systems',
            description: 'Good training and development programs help you retain the right people and grow profits. As the battle for top talent becomes more competetive, employee training and development programs are more important than ever.'
        },
        {
            id: 2,
            title: 'Design Planning',
            description: 'Business planning to take the new concept to market and turn into profit.'
        },
        {
            id: 3,
            title: 'Analytics',
            description: 'Unlock the power of your data to become analytically driven and drive profitability and efficiency improvements, throughout your entire organization.'
        }
    ]);

    return (
        <section className="items-center justify-center gap-4 flex flex-col w-full md:p-24 p-10 container mx-auto">
            <div className="flex flex-col gap-3 text-gray-700">
                <h1 className="font-semibold text-center md:text-5xl text-xl md:mt-10">Our Success Story</h1>
                
                <div className="grid md:grid-cols-2 gap-10 mt-10">
                    { stories?.map(story => (
                        <div key={story.id}>
                            <h2 className="font-semibold md:text-2xl text-lg">{story.title}</h2>
                            <p className="text-justify md:text-sm text-xs">{story.description}</p>
                        </div>
                    )) }
                    <div>
                        <h2 className="font-semibold md:text-2xl text-lg">Offerings</h2>
                        <ul className="list-disc text-justify md:text-sm text-xs">
                            <li>T24 implementation, development and support - both Onsite and Offsite</li>
                            <li>Staff Augmentation</li>
                            <li>Development of 3rd party solutions and interfaces with T24</li>
                            <li>Customized T24 technical training</li>
                        </ul>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col md:gap-10 gap-5 justify-around md:mt-24 mt-5 items-stretch">
                    { offers?.map(offer => (
                        <div className="bg-gray-50 shadow-lg rounded-md md:w-1/2 w-full p-3" key={offer.id}>
                            <h3 className="font-semibold md:text-lg text-sm">{offer.title}</h3>
                            <p className="md:text-sm text-xs text-justify mt-1">{offer.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Stories;