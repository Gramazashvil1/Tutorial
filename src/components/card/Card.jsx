import "./card.scss"
import {useNavigate} from "react-router-dom";


function Card({data}) {

   const navigate = useNavigate();



    return (
        <>




            <div className="card" onClick={()=> navigate(`/news/${data.id}`)}>
                {data.img && <img src={data.img} alt={data.title} />}
                {data.url && <img src={data.url} alt={data.title} />}
                <h1>{data.title}</h1>
                {data.text && <p>{data.text}</p>}
            </div>





        </>
    );
}

export default Card;
