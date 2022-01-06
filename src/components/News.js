import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Load from "./Load";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };
  constructor() {
    super();

    this.state = {
      article: [],
      page: 1,
      loading: true,
      totalResults: 0,
    };
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `    https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=6`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      // loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  
   fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `    https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  // previousbtn = async () => {
  //   console.log("previousclick");
  //   this.setState({page : this.state.page -1 });
  //   this.updateNews();
  //   console.log(this.state.page);
  // };
  // nextbtn = async () => {
  //   console.log("nextclick");
  //   this.setState({page : this.state.page+1 });
  //   this.updateNews();
  //   console.log(this.state.page);
  // };

  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center my-5">News Daily - Top Headlines</h1>
        {/* {this.state.loading && <Load/>} */}
        

        <div className="row ">
          {this.state.article.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title : ""}
                  description={ele.description ? ele.description : ""}
                  newsUrl={ele.url}
                  imageUrl={ele.urlToImage}
                  author={ele.author}
                  date={ele.publishedAt}
                  source={ele.source.name}
                />
              </div>
            );
          })}
        </div>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<Load />}
        ></InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousbtn}
          >
            &larr;Previous
          </button>
          <button type="button" className="btn btn-dark" disabled={this.state.page >  Math.ceil(this.state.totalResults/20)} onClick={this.nextbtn}>
            Next&rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
