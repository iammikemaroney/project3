import axios from "axios";

const config = { headers: {'user-key': '6ee815bea30088659eeacc20eaae0d97'} }; 
const URL = "https://developers.zomato.com/api/v2.1/geocode?lat=40.7235&lon=-74.1622"

export default {
    search: function() {
        return axios.get(URL + config)
    }
};