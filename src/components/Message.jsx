const Message = () => {
    return (
        <section className="p-32 contact__bg">
            <form className="message__bg bg-opacity-25 w-1/2 p-5 flex flex-col gap-5 rounded-md shadow-lg">
                <h1 className="text-3xl font-semibold text-white">Message Us</h1>
                <div className="flex flex-col text-white">
                    <label htmlFor="name">Name</label>
                    <input className="p-2 rounded-sm outline-none placeholder:text-sm text-sm text-black" placeholder="Your name" type="text" />
                </div>
                <div className="flex flex-col text-white">
                    <label htmlFor="email">Email Address</label>
                    <input className="p-2 rounded-sm outline-none placeholder:text-sm text-sm text-black" placeholder="Your email" type="email" />
                </div>
                <div className="flex flex-col text-white">
                    <label htmlFor="subject">Subject</label>
                    <input className="p-2 rounded-sm outline-none placeholder:text-sm text-sm text-black" placeholder="Enter subject" type="text" />
                </div>
                <div className="flex flex-col text-white">
                    <label htmlFor="name">Message</label>
                    <textarea className="p-2 rounded-sm text-sm outline-none text-black"></textarea>
                </div>

                <button className="bg-white w-1/4 text-sm p-2 rounded-md text-blue-500">Send Message</button>
            </form>
        </section>
    )
}

export default Message;