import './App.css'
import Home from "./pages/home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/about/About.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Adult from "./pages/adult/Adult.jsx";
import News from "./pages/news/News.jsx";
import NewsDetail from "./pages/news-detail/NewsDetail.jsx";


function App() {

  return (


      <BrowserRouter>

          <Routes>

              <Route path={"/"} element={<Layout/>}>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/about"} element={<About/>}/>
                  <Route path={"/shop"} element={<Shop/>}/>
                  <Route path={"/news"} element={<News/>}/>
                  <Route path={"/contact"} element={<Contact/>}/>
                  <Route path={"/adult"} element={<Adult/>}/>
                  <Route path={"/news/:id"} element={<NewsDetail/>}/>
                  {/*todo 1*/}
              </Route>


          </Routes>





      </BrowserRouter>





  )
}

export default App
