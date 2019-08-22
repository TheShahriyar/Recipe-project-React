import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { children, title, styleClass } = this.props;
    return (
      <header>
        <div className="container-fluid">
          <div className={`row align-items-center ${styleClass}`}>
            <div className="col text-center">
              <h1 className="text-light text-uppercase letter-spacing display-3 style-text">
                {title}
              </h1>
              {children}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  title: "Default Title",
  styleClass: "default-hero"
};
