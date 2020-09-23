const axios = require("axios");

//const url ="https://api.apify.com/v2/key-value-stores/vqnEUe7VtKNMqGqFF/records/LATEST?disableRedirect=true";

const url = "https://www.tvgids.nl/gids/spike";
const getData = () => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

getData();
