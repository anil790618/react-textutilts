import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'; 
const  News =(props)=>  {
const [articles, setarticles] = useState([])
const [loading, setloading] = useState(true)
const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(0) 
  const updateNews=  async ()=>{
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${ page}&pageSize=${props.pageSize}`;
       
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        console.log(parsedData);  
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
            props.setProgress(100)
    }
useEffect(() => {
  updateNews();
}, []) 
   const fetchMoreData = async() => { 
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
         setarticles(articles.concat(parsedData.articles)) ;
         settotalResults(parsedData.totalResults);
        setloading(false) 
      };
 
        return (
            <div className='' style={{"margin-top":"70px"}}>
            
                <h1 className='text-center'>NewsMonkey - Top {props.category} Headlines</h1>  
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={ fetchMoreData}
                    hasMore={articles.length !==   totalResults}
                    loader={<Spinner/>}
                    >
                         <div className="container ">
                    <div className="row"> 
                        {   articles.map((element)=>{
                            return <div className="col-md-4 col-lg-3" key={element.url}>
                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div> 
                        })} 
                    </div> 
                    </div>
                </InfiniteScroll> 
           </div>
        ) 
}
News.defaultProps = {
    country:'in',
    pageSize:8,
    category:'general',
    
}
News.propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
}
export default News