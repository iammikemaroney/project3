import axios from "axios";

const BASEURL = "https://api.betterdoctor.com/2016-03-01/doctors?query=weed&location=40.494831,%20-74.46769,%2050&user_location=40.494831,%20-74.467693&skip=0&limit=10&user_key=" ;
const APIKEY = "144db4638bf7ea5ea76c0d3a06ac7ef1";

// Export an object with a "search" method that searches the Giphy API for the passed query

export default {

  // Post API
  // newPost: function(){
  //   return axios.post("/post");
  // },
  // getPost: function() {
  //   return axios.get("/post");
  // },
  // Doctors API
  search: function(query) {
    return axios.get(BASEURL + APIKEY);
  },
  getCurrentUser: function(){
    return axios.get("/auth/getUser");
  },
  // Google API
  signUp: (newUser) => {
    return axios.post("/auth/signup", newUser);
  },
  
  login: (user) => {
    return axios.post("/auth/login", user);
  },
  
  logout: () => {
    return axios.get("/auth/logout");
  },
  
  googleSignup: () => {
    return axios.get("/auth/google");
  },

};
