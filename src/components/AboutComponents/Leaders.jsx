const Leaders = () => {
    return (
        <section className="md:p-25 p-10 leaders__bg">
            <div className="grid md:grid-cols-2 justify-items-center items-center container mx-auto">
                <img className="w-1/2" src="/images/about/activ2touch-570x700.png" alt="Leaders" />
                <div>
                    <h1 className="md:text-3xl text-xl semifont-bold text-gray-100">Global Leader in Technology Services</h1>
                    <h2 className="mt-3 font-semibold md:text-base text-sm text-gray-100">Screens & Interactive Design</h2>
                    <p className="md:text-sm text-xs mt-2 text-justify text-gray-100">The most impressive SCREENS in smart design, embody clear vision, and are backed by the right technology.</p>
                </div>              
            </div>
        </section>
    )
}

export default Leaders;