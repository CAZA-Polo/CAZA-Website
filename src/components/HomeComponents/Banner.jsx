const Banner = () => {
    return (
        <section className="items-center justify-center gap-4 flex flex-col w-full p-24">
            <div className="flex flex-col gap-3 text-gray-700 w-1/2">
                <h1 className="font-bold text-center text-5xl mt-10">Welcome to CAZA Technology Solutions Inc.</h1>
                <p className="text-justify text-base">We help you to ensure successful implementation of your T24 core banking solution. We customize our services based on
                your requirements. We listen to your specific needs and delivery quality that meet your criteria, expectation, budget, and deadline.
                We help to keep you focused ensuring T24 best practices are aligned to your business needs. We invite you to contact us to see how 
                our services can benefit your organization.
                </p>

                <div className="flex justify-center">
                    <button className="rounded-md w-1/2 bg-blue-500 p-2 text-gray-100 hover:bg-transparent hover:border-blue-500 hover:border hover:text-blue-500 transition">Read More</button>
                </div>                                    

            </div>
        </section>
    )
}

export default Banner;