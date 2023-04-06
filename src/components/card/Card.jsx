import "./card.scss"
import {useNavigate} from "react-router-dom";


function Card({data}) {


    //todo urlshi ushvebs id-is რომელსაც იღებს ქვემოთ
   const navigate = useNavigate();



    return (
        <>



            {/*todo 2 აქ იღებს id ს navigate - ონკლიკზე*/}
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
