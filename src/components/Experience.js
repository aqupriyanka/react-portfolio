import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.showCompanies = this.showCompanies.bind(this);
    this.showCompanyIcons = this.showCompanyIcons.bind(this);
    this.handleCompanyClick = this.handleCompanyClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      displayCompanyDetails: false,
      companyElement: null,
    };
  }

  handleDetails(e) {
    e.preventDefault();
    let companyName = e.target.id;
    return "";
  }

  handleCompanyClick = (child) => () => {
    console.log("inside handle click", child);
    this.setState({ displayCompanyDetails: true, companyElement: child });
    return <div>{child}</div>;
  };

  resetState(e) {
    e.preventDefault();
    this.setState({ displayCompanyDetails: false, companyElement: null });
  }

  showCompanies() {
    console.log("inside show companies");
    if (!this.state.displayCompanyDetails) {
      return (
        <div>
          <h1>
            <u> Experience </u>
          </h1>
          <ul className="companyIcons">{this.showCompanyIcons()}</ul>
        </div>
      );
    } else {
      return (
        <div>
          <a href="#" onClick={this.resetState}>
            Back
          </a>
          {this.state.companyElement}
        </div>
      );
    }
  }

  showCompanyIcons() {
    const children = this.props.children;
    console.log("inside show company icons ...");
    return React.Children.map(children, (child, i) => {
      return (
        <li
          key={child.props.name}
          className="companyIcon"
          onClick={this.handleCompanyClick(child)}
        >
          <img src={child.props.img} width="200px" height="200px" />
          <br />
          {child.props.year}
        </li>
      );
    });
  }
  render() {
    return (
      <div id="pageHeading">
        {/*<span id="company1" onClick={handleDetails}>Snap On</span>
                        <span id="company2" onClick={handleDetails}>Sapient</span>
                        <span id="company3"onClick={handleDetails}>Fidelity</span>
                        <span id="company4" onClick={handleDetails}>TCS</span>
                        <span id="company5" onClick={handleDetails}>Wipro</span>*/}
        {this.showCompanies()}
        {/*React.Children.map( this.props.children, (child, i) => (child))*/}
      </div>
    );
  }
}

export default Experience;
