import "./Home.scss"
import Carousel from "../../components/carousel/Carousel.jsx";
import {NavLink} from "react-router-dom";

function Home() {



    return (
        <>
            <Carousel/>

        <div className="main-info">

            <div className="our-story">

            <p>
                Lorem ipsum dolor sit amet
            </p>

            <h1>
                Our Story
            </h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illo mollitia officiis similique? Accusamus aliquam aspernatur at debitis dolor illum inventore
                labore laborum laudantium, molestias necessitatibus nemo nobis non nostrum nulla, officia sed suscipit tempore ullam ut. Aliquam molestiae nulla sint? A, ab aliquam commodi
                dolorem ea esse fugiat ipsa maiores maxime nam necessitatibus non nostrum optio perferendis quam rem.
            </p>

                <p>
                    <NavLink to={"/about"}>  See more about our shop... </NavLink>
                </p>


            </div>




        </div>






















        </>
    );
}

export default Home;