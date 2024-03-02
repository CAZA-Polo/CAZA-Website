import Footer from "../components/Footer";
import Message from "../components/Message";
import Banner from "../components/ServicesComponents/Banner";
import Creative from "../components/ServicesComponents/Creative";
import Customize from "../components/ServicesComponents/Customize";
import GlobalBusiness from "../components/ServicesComponents/GlobalBusiness";
import Solutions from "../components/ServicesComponents/Solutions";

const Services = () => {
    return (
        <main className="container mx-auto">
            <Banner />
            <Customize />
            <Solutions />
            <GlobalBusiness />
            <Creative />
            <Message />
            <Footer />
        </main>
    )
}

export default Services;