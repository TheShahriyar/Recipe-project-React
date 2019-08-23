import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      // recipe: recipeData,
      recipe: {},
      id,
      loading: true
    };
  }

  async componentDidMount() {
    const url = `https://www.food2fork.com/api/get?key=${
      process.env.REACT_APP_API_KEY
    }&rId=${this.state.id}`;

    try {
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({
        recipe: responseData.recipe,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title,
      f2f_url
    } = this.state.recipe;

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto my-5">
              <h2 className="primary-color text-uppercase text-center my-auto">
                Recipe loading......
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto my-3">
            <Link to="/recipes" className="btn btn-warning mb-5 text-uppercase">
              Back to recipes list
            </Link>
            <img src={image_url} alt={title} className="w-100" />
          </div>
          <div className="col-md-6 col-10 mx-auto my-3">
            <h3 className="text-uppercase">{title}</h3>
            <h6 className="style-text text-warning mb-3">
              Recipe by: {publisher}
            </h6>
            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-white mr-3"
            >
              Publisher Website
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success text-white"
            >
              Recipe url
            </a>
            <ul className="list-group mt-3">
              <h2 className="mb-4 mt-3">Ingredients</h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item style-text">
                    {item}
                  </li>
                );
              })}
            </ul>
            <a
              href={f2f_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger text-white mt-5"
            >
              Food2Fork Link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
