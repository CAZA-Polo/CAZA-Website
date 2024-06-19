const Maintenance = () => {
    return (
        <main className="bg-gray-800 h-screen flex items-center justify-center">
            <div className="w-1/2 flex flex-col gap-5">
                <h1 className="text-6xl font-semibold text-gray-100">We'll be back soon!</h1>
                <p className="text-gray-100 text-sm">Sorry for the inconvenience but we're performing some maintenance at the moment.
                If you need to, you can always reach us out to <strong className="text-orange-600">hr@cazatechnology.com</strong>, otherwise we'll
                be back online shortly!
                </p>
                <span className="text-gray-100">- CAZA Technology Solutions Inc.</span>
            </div>
        </main>
    )
}

export default Maintenance;