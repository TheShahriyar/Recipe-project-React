import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { search, handleChange, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto col-10 mt-5 text-center">
              <h1 className="style-text text-capitalize">
                Search recipe with{" "}
                <strong className="primary-color">Food2Fork</strong>
              </h1>
              <form className="mt-4">
                <label htmlFor="search" className="text-capitalize">
                  types recipes separated by comma
                </label>
                <div className="input-group mt-2">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="chicken, onion, carrots"
                    value={search}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
