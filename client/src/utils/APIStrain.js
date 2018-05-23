import axios from "axios";

const BASEURL = "https://api.otreeba.com/v1/strains?page=7&count=1" ;
const APIKEY = "&api_key=52175a14461a5c0b13d0208d45974a977cc0d252&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};