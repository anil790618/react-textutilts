import React from 'react' 
const NewsItem =(props)=>  { 
        let {title, description, imageUrl, newsUrl,author,date,source} =props;
        return (
            <div className="my-3   border">
                <div className="card"    >
                <span style={{"z-index":999}} className="position-absolute  badge rounded-pill bg-danger"  >{source} </span>
                    <img  style={{"height":"220px"}} src={!imageUrl?"https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/11/breaking-1603159815-1606179737.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body"> 
                        <h5 className="card-title">{title.slice(0,50)} ...</h5>
                        <p className="card-text">{description.slice(0,100)} ...</p>
                        <p className="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString().slice(0,25)}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        ) 
}

export default NewsItem
