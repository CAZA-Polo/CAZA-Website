import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GlobalLayout from "./layouts/GlobalLayout";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Career from "./pages/Career";
import Team from "./pages/Team";
import NotFound1 from "./pages/NotFound1";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import GlobalProvider from "./helpers/GlobalProvider";
import Maintenance from "./pages/Maintenance";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          {/* <Route element={<GlobalLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Product />} />
            <Route path='/career' element={<Career />} />
            <Route path='/team' element={<Team />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/cookie-policy' element={<CookiePolicy />} />
          </Route>
          <Route path='*' element={<NotFound1 />} /> */}
          <Route path='/' element={<Maintenance />} />
      </Route>
    )
  )

  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App
