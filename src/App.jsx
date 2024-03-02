import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GlobalLayout from "./layouts/GlobalLayout";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route element={<GlobalLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Product />} />
          </Route>

          <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />;
}

export default App
