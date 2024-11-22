import React from 'react'

const NewsItems = (props) => {
    let { title, description, url, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>{source}</span>
                <img className="card-img-top" src={!url ? "https://cdn.mos.cms.futurecdn.net/go72vbYBoxAzGhmUUGMUB9-1200-80.jpg" : url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted<">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-dark">Load More..</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems