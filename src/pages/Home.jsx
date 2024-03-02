import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import Comments from '../components/HomeComponents/Comments';
import GreatService from '../components/HomeComponents/GreatService';
import Offers from '../components/HomeComponents/Offers';
import Services from '../components/HomeComponents/Services';
import Stories from '../components/HomeComponents/Stories';
import TopBanner from '../components/HomeComponents/TopBanner';
import WhatWeDo from '../components/HomeComponents/WhatWeDo';
import Message from '../components/Message';

const Home = () => {
    return (
        <main className="container mx-auto">
            <Banner />
            <TopBanner />
            <Services />
            <Offers />
            <WhatWeDo />
            <Stories />
            <Comments />
            <GreatService />
            <Message />
            <Footer />
        </main>
    )
}

export default Home;