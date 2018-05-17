import axios from "axios";
const BASEURL = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=';
const APIKEY = "144db4638bf7ea5ea76c0d3a06ac7ef1";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};


