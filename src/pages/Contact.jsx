import Banner from "../components/ContactComponents/Banner";
import CAZALocation from "../components/ContactComponents/CAZALocation";
import ExperiencedTeam from "../components/ContactComponents/ExperiencedTeam";
import Footer from "../components/Footer";
import Message from "../components/Message";

const Contact = () => {
    return (
        <main className="container mx-auto">
            <Banner />
            <ExperiencedTeam />
            <CAZALocation />
            <Message />
            <Footer />
        </main>
    )
}

export default Contact;