const History = () => {
    return (
        <section className="md:p-24 p-10 container mx-auto">
            <div className="grid md:grid-cols-2 gap-5 md:gap-0 justify-items-center items-center">
                <div>
                    <h1 className="md:text-3xl text-xl font-semibold text-blue-500">Our History</h1>
                    <p className="md:text-sm text-xs mt-2 text-justify">CAZA was found in 2016 by banking and IT consultants with more than 20+ years of implementation experience of T24 corebanking solution throughout Asia Pacific and EMEA covering Retail Banking, Corporate Banking, Private Banking, Treasury, Islamic Banking, Microfinance, and Universal Banking.</p>
                </div>
                <img className="md:w-1/2 order-first md:order-last" src="/images/offers/DSC0073.jpg" alt="Working Team" />
            </div>
        </section>
    )
}

export default History;