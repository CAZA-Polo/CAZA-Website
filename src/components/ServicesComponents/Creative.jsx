import { Link } from 'react-router-dom';

const Creative = () => {
    return (
        <section className="md:p-32 p-16">
            <div className="grid md:grid-cols-2 justify-items-center items-center container mx-auto">
                <div>
                    <h1 className="md:text-3xl text-xl font-semibold text-blue-500">Creative Ideas</h1>
                    <p className="md:text-sm text-xs md:mt-2 text-justify">Think, imagine, create, improve business marketx`ing strategies with ideas that comes out-of-the-box.</p>
                    <button className="md:p-2 p-1 md:text-sm text-xs bg-blue-500 rounded-sm text-gray-100 mt-2 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition">
                        <Link to="/contact">Contact Us</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Creative;