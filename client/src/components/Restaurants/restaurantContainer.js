import React, { Component } from "react";
import restaurantInfo from "./restaurantDetails";
import API from "./restaurantAPI";

class RestaurantContainer extends Component {
    state = {
        nearbyRestaurants: {},
        cuisine: "",
        operation: 'Search'
    };

    componentDidMount() {
        this.searchRestaurant();
    }

    searchRestaurant = query => {
        API.search().then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

    handleSubmitSearch = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchRestaurant(this.state.search);
    };

    render() {
        return (
            <Container>
            <Row>
                <Col size="md-6">   
                <Div className="main-body">

                    <h1>Nearby Munchies</h1>
                    <Input className="button-primary" type="button" value={this.state.operation} onClick={this.search} 
                    handleSubmitSearch={this.handleSubmitSearch}
                    handleFormSubmit={this.handleFormSubmit}/>
                    <hr />
                    <Div>
                        <RestaurantInfo
                            resRame={this.state.result.name}
                            resAdress= {this.state.result.address}
                            costForTwo={}
                        />


                    </Div>
                </Div>
                </Col>
            </Row>
            </Container>
        );
    }
}