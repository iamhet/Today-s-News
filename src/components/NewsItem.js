import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-dark">
            {source}
          </span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Last updated by {author} on {date}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">Source : {source}</small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read more..
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
