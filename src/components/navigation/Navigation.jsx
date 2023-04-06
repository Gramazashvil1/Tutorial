import "./navigation.scss"
import {Link, NavLink,} from "react-router-dom";


function Navigation() {






    return (

<>

    <ul>
        <li className={"logo-li"}>  <NavLink to={"/"}> <img src="/src/assets/images/logo.PNG" alt="logo" /></NavLink></li>
    </ul>

    <ul>
        <li> <Link to={"/"}> HOME </Link></li>
        <li> <NavLink to={"/about"}> ABOUT </NavLink></li>
        <li> <NavLink to={"/shop"}> SHOP </NavLink></li>
        <li> <NavLink to={"/news"}> NEWS </NavLink></li>
        <li> <NavLink to={"/contact"}> CONTACT </NavLink></li>
        <li> <NavLink to={"/adult"}> ADULT </NavLink></li>
        <li> <NavLink to={"/contact"}> <img src="src/assets/images/bag.png" alt="logo" /> </NavLink></li>
    </ul>



</>


    );
}

export default Navigation;
