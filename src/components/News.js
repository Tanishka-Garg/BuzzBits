import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'


export class News extends Component {
    
    static defaultProps = {
        country: 'in',
        pageSize: '9',
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        
  }
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    
    handlePrevClick = async () => {
        console.log("prev")
        this.setState({
            page : this.state.page - 1,
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=161556b23a6147158637a2f7c19d9e2a&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,})
    }
    handleNextClick = async () => {
        this.setState({
            page : this.state.page + 1,
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=161556b23a6147158637a2f7c19d9e2a&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })

        
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=161556b23a6147158637a2f7c19d9e2a&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }


    render() {
    return (
        <div className='container my-3'>
            <h1>Top Buzz</h1>
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-3"  key ={element.url}>
                        <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""}
                            date={element.publishedAt ? element.publishedAt: ""}
                            imageurl={element.urlToImage?element.urlToImage:"https://img.freepik.com/free-vector/global-technology-earth-news-bulletin-background_1017-33687.jpg?w=1060&t=st=1680102358~exp=1680102958~hmac=1bbfaf1889104bd7248836bcd8625aec201cf6153b887ba722a0ffed8cb398ba"} newsurl={element.url} />
                    </div>
                    // .substring(0, 10) + " " + element.publishedAt.substring(11, 18) 
                })}
            </div>
            <div className="container d-flex justify-content-between my-3">
                <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}> &larr; previous</button>
                <button disabled={this.state.page+1>(Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>next &rarr;</button>
            </div>
            {/*  */}
      </div>
    )
  }
}

export default News
