import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-4 col-lg-4 my-3">
        <div className="card">
          <img
            src={image_url}
            alt={title}
            className="img-card-top"
            style={{ height: "14rem" }}
          />
        </div>
        <div className="card-body text-capitalize">
          <h6>{title}</h6>
          <h6 className="style-text text-warning">Provided by: {publisher}</h6>
        </div>
        <div className="card-footer">
          <Link to={`/recipes/${recipe_id}`} className="btn btn-primary">
            Details
          </Link>
          <a
            href={source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mx-2"
          >
            Recipe Url
          </a>
        </div>
      </div>
    );
  }
}
