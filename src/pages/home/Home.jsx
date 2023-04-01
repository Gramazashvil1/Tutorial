import "./Home.scss"
import {NavLink} from "react-router-dom";

function Home() {

    function al(){
        alert('chemikai')
    }


    return (
        <>

        <div className="name">
            <NavLink to={"/about"}>about</NavLink>
        </div>






















        </>
    );
}

export default Home;