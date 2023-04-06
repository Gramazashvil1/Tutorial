import React, {useEffect, useState} from 'react';
import "./newsdetail.scss"
import api from "../../service/api.js";
import {Spin} from "antd";
import {useParams} from "react-router-dom";


function NewsDetail() {

    const {id} = useParams();


    const [newsDetail,setNewsDetail] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false)


    useEffect(() => {
        getData(id);
    }, [id]);


    async function getData(){
        try{
            setIsLoading(true);
            const {data} = await api.get(`/photos/${id}`)
            setNewsDetail(data)
            setIsLoading(false)
        }catch{
            setIsError(true)
        }finally {
            setIsLoading(false)
        }
    }

    if(isLoading)return (
        <div>
            <Spin/>
        </div>
    )

    if(isError)return(
        <div>
            მოხდა შეცდომა
        </div>
    )


    return (
        <>




            <div className="news-detail">

                <div className="news-img">
                    <img src={newsDetail.url} alt={newsDetail.title} />

                    <div className="news-id">
                        {newsDetail.id}
                    </div>

                </div>

                <h1>
                    {newsDetail.title}
                </h1>


            </div>

        </>
    );
}

export default NewsDetail;