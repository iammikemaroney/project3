import React, { Component } from "react";
import StrainList from "./Strain/StrainList";
import API from "../../utils/APIStrain";

class StrainContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchStrain("")
    }

    searchStrain = query => {
        API.search(query)
        .then(res => this.setState({ results: res.data.data}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchStrain(this.state.search);
      };

    render() {
        return (
            <div>
                {/* <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                /> */}
                <StrainList results={this.state.results} />
                </div>
        );
    }
}

export default StrainContainer;