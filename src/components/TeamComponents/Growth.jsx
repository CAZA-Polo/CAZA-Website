import { Link } from 'react-router-dom';

const Growth = () => {
    return (
        <section className="md:p-32 p-16">
            <div className="container mx-auto">
                <h1 className="md:text-4xl text-xl font-semibold text-gray-700">We offer a huge opportunity for growth</h1>
                <Link to='/about' className="text-blue-500 md:text-sm text-xs cursor-pointer">Discover more about our Team</Link>
            </div>
        </section>
    )
}

export default Growth;