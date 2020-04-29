import React, { Component, Fragment } from "react";
import InputTextField from "./InputTextField";
import "../styles/SearchBar.css";

class SearchBar extends Component {
  state = {
    city: "",
    advanceSearch: "",
    showAdvancedSearchField: false,
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitResults(this.state.city, this.state.advanceSearch);
  };

  renderPrimaryInputField = () => {
    return (
      <div className="searchBar-primary">
        <form className="searchBar-form" onSubmit={this.onFormSubmit}>
          <div className="searchBar-inputWrapper">
            <InputTextField
              //label="City"
              value={this.state.city}
              onChangeValue={(e) =>
                this.setState({
                  city: e.target.value,
                })
              }
              inputClass="searchBar-inputField"
              placeholder="City"
            />
            <div
              onClick={() => {
                this.setState({
                  showAdvancedSearchField: !this.state.showAdvancedSearchField,
                });
              }}
            >
              <p>Advanced Search</p>
            </div>
          </div>
          {this.state.showAdvancedSearchField ? (
            <Fragment>
              <InputTextField
                value={this.state.advanceSearch}
                onChangeValue={(e) =>
                  this.setState({
                    advanceSearch: e.target.value,
                  })
                }
                placeholder="Name of the restraunt or address"
                inputClass="searchBar-advanceSearch"
              />
            </Fragment>
          ) : null}
          <br />
          <button className="searchBar-submitButton">Find</button>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div className="searchBar-wrapper">{this.renderPrimaryInputField()}</div>
    );
  }
}

export default SearchBar;
