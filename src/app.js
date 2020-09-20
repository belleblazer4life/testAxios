const axios = require("axios");

const url =
  "https://apiq.apify.com/v2/key-value-stores/vqnEUe7VtKNMqGqFF/records/LATEST?disableRedirect=true";

async function getWithAxios() {
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.error(error.message);
    console.error(error.response.data);
  }
}

getWithAxios();
