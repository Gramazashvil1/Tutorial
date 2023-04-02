import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import Header from "../header/Header.jsx";




function Layout(){



    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )


}

export default Layout;