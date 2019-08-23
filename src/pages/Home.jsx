import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header title="Welcome to Recipes" styleClass="header-hero">
          <Link to="/recipes" className="btn btn-light btn-lg mt-3">
            View Recipes
          </Link>
        </Header>
      </div>
    );
  }
}
