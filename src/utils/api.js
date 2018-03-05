import axios from 'axios';

module.exports = {
  fetchMerchantLocations: (url) => {
    const encodedURI = window.encodeURI(url);
    return axios.get(encodedURI)
      .then((response) => {
      // Alphabetically sort response by Merchant Name
        const locations = response.data.sort((a, b) => {
          if (a.location.merchant_name.toLowerCase() < b.location.merchant_name.toLowerCase()) return -1;
          if (a.location.merchant_name.toLowerCase() > b.location.merchant_name.toLowerCase()) return 1;
          return 0;
        });
        return locations;
      });
  },
};
