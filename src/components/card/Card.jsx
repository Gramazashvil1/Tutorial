import "./card.scss"

function Card({data}) {
    return (
        <>


            <div className="card">
                <img src={data.img} alt={data.title} />
                <h1>{data.title}</h1>
                <p>{data.text}</p>
            </div>


        </>
    );
}

export default Card;
