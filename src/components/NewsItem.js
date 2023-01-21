import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl,author,date,source} = this.props;
        return (
            <div className="my-3 position-relative border">
               
                <div className="card"   >
                    <img src={!imageUrl?"https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/11/breaking-1603159815-1606179737.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        {/* <h5 className="card-title">{title}</h5> */}
                        <h5 className="card-title">{title} <span style={{"z-index":999}} className="position-absolute  top-0     badge rounded-pill bg-danger"  >{source} </span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
