import "./navigation.scss"
import {NavLink, Outlet} from "react-router-dom";


function Navigation() {
    return (

<>

    <ul>
        <li> <NavLink to={"/"}> HOME </NavLink></li>
        <li> <NavLink to={"/about"}> ABOUT </NavLink></li>
        <li> <NavLink to={"/shop"}> SHOP </NavLink></li>
        <li> <NavLink to={"/contact"}> CONTACT </NavLink></li>

    </ul>






</>


    );
}

export default Navigation;
