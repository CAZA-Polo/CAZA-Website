import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';

const GlobalLayout = () => {

    return (
        <ScrollToTop>
            <main>
                <Navbar />
                <Outlet />
            </main>
        </ScrollToTop>
    )
}

export default GlobalLayout;