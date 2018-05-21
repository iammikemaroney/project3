import React, { Component } from "react";
import SearchForm from "./SearchForm";
import DoctorList from "./DoctorList";
import API from "../utils/API";

class DoctorListContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchDoctor("Doctor Cookies")
    }

    searchDoctor = query => {
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
        this.searchDoctor(this.state.search);
      };

    render() {
        return (
            <div>
                <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                />
                <DoctorList results={this.state.results} />
                </div>
        );
    }
}

export default DoctorListContainer;