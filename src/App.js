import React, { Component } from "react";
import openTable from "./api/api";
import "./styles/App.css";

import SearchBar from "./components/SearchBar";
import Card from "./components/Card";

class App extends Component {
  state = {
    restraunts: [],
    data: [],
    errorMessageServer: "",
  };

  onSearchSubmit = async (city, param) => {
    try {
      if (param === "") {
        const response = await openTable.get("/api/restaurants?city=" + city);
        this.setState({
          restraunts: response.data.restaurants,
          data: response.data,
        });
      } else {
        const response = await openTable.get(
          "/api/restaurants?city=" + city + "&address=" + param
        );
        console.log(response.data.total_entries);
        if (response.data.total_entries !== 0) {
          this.setState({
            data: response.data,
            restraunts: response.data.restaurants,
          });
        } else {
          const response = await openTable.get(
            "/api/restaurants?city=" + city + "&name=" + param
          );
          this.setState({
            data: response.data,
            restraunts: response.data.restaurants,
          });
        }
      }
    } catch (e) {
      console.error("Failure!");
      console.error(e.response.status);
      this.setState({
        errorMessageServer: e.response.status,
      });
    }
  };

  renderCards = () => {
    return this.state.restraunts.map((restraunt) => {
      return (
        <Card
          image={restraunt.image_url}
          imageName={restraunt.name}
          rName={restraunt.name}
          rlocation={restraunt.address}
          key={restraunt.id}
        />
      );
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmitResults={this.onSearchSubmit} />
        <div className="app-results">
          <h4>
            {this.state.errorMessageServer !== ""
              ? "Something went wrong please check the values you have entered"
              : null}
          </h4>
          <h4>
            {this.state.restraunts.length === 0
              ? null
              : `Found ${this.state.data.total_entries} restraunts`}{" "}
          </h4>

          <div className="app-card-container">{this.renderCards()} </div>
        </div>
      </div>
    );
  }
}

export default App;
