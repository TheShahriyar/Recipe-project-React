import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <Header title="404">
        <h3 className="text-white text-uppercase">Page not found</h3>
        <Link to="/" className="btn btn-secondary mt-3">
          Back to Homepage
        </Link>
      </Header>
    );
  }
}
