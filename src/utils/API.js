import axios from "axios";

const BASEURL = "https://api.betterdoctor.com/2016-03-01/doctors?query=weed&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" ;
const APIKEY = "144db4638bf7ea5ea76c0d3a06ac7ef1";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};