import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "144db4638bf7ea5ea76c0d3a06ac7ef1";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
