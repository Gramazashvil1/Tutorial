import "./shop.scss"
import image from "../../assets/react.svg";
import Card from "../../components/card/Card.jsx";


function Shop() {

    const shop = [
        {
            id:1,
            img:image,
            title:"title 1",
            text:"dolor sit amet, consectetur adipisicing ",
        },

        {
            id:2,
            img:image,
            title:"title 2",
            text:"ipsum dolor sit amet, consectetur adipisicing elit. Magnam, unde? ext",
        },

        {
            id:3,
            img:image,
            title:"title 3",
            text:"ipsum dolor sit amet, consectetur adipisicing elit. Magnam,",
        },

        {
            id:4,
            img:image,
            title:"title 4",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing  lorem",
        },

    ]


    return (

        <div className="shop">

            {
                shop.map(product => (
                    <Card key={product.id} data={product}/>
                ))
            }

        </div>

    );
}

export default Shop;