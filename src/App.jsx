import './App.css'
import Home from "./pages/home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/about/About.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Contact from "./pages/contact/Contact.jsx";


function App() {

  return (


      <BrowserRouter>

          <Routes>

              <Route path={"/"} element={<Layout/>}>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/about"} element={<About/>}/>
                  <Route path={"/shop"} element={<Shop/>}/>
                  <Route path={"/contact"} element={<Contact/>}/>
              </Route>


          </Routes>





      </BrowserRouter>





  )
}

export default App
