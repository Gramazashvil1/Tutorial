import "./news.scss"
import {useEffect, useState} from "react";
import {Spin} from "antd";
import Card from "../../components/card/Card.jsx";
import api from "../../service/api.js";





function News() {

    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10;
    const pagesVisited = pageNumber * newsPerPage;




















    //todo 1
    const [news,setNews] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false)







    //todo 2
    useEffect(() => {
        getData();
    }, []);

    async function getData(){
        try{
            setIsLoading(true);
            const {data} = await api.get("/photos")
            setNews(data)
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
          <div className="news-main">




              {/*todo 3 */}
              {/*{*/}
              {/*    news?.map((news)=>*/}
              {/*    <Card key={news.id} data={news}/>*/}
              {/*)*/}
              {/*}*/}








              {
                  news?.slice(pagesVisited, pagesVisited + newsPerPage).map((news) =>
                      <Card key={news.id} data={news}/>
                  )
              }






          </div>

      </>
    )
}

export default News;
