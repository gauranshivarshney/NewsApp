import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=66d48dc951a9406eb176fea0ecc457c0`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News`;
        updateNews()
    }, [])
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=66d48dc951a9406eb176fea0ecc457c0`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    }
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{marginTop: '90px', marginBottom: '20px'}}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div class="container" style={{overflow: "hidden"}}>
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItems title={element.title} description={element.description} url={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }

News.defaultProps = {
    category: 'general'
}
News.propTypes = {
    category: PropTypes.string
}

export default News