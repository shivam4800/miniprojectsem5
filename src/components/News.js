import React, { useState, useEffect } from "react";


import './News.css';
import { Center } from "devextreme-react/map";

const News = () => {

    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("react");
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react')
    const [loading, setLoading] = useState(false);
    const fetchNews = () => {
        setLoading(true)
        fetch(url)
            .then(result => result.json())
            //.then(data => console.log(data))
            .then(data => (setNews(data.hits), setLoading(false)))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchNews();
    }, [url]);

    const handleChange = e => {
        setSearchQuery(e.target.value)

    };

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
    };
    const showLoading = () => (loading ? <h2>Loading ... </h2> : "");
    const searchForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleChange} />
            <button>Search</button>
        </form>
    );
    const showNews = () => (

        news.map((n, i) => (
            <p><a href={n.url}>{n.title} </a> </p>))

    )
    return (
        <div className="News" >
            
            <center>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2 className="NewsTitle" style={{marginTop: '50px' }}>News</h2>
            {showLoading()}
            {searchForm()}
                {showNews()}
            </center>>

        </div>
    )

}

export default News;