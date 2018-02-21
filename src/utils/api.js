var axios = require('axios');

module.exports = {
    fetchMerchantLocations: function (url) {
        var encodedURI = window.encodeURI(url);
    
        return axios.get(encodedURI)
            .then(function(response) {
                // Alphabetically sort response by Merchant Name
                const locations = response.data.sort(function(a, b){
                    if(a.location.merchant_name.toLowerCase() < b.location.merchant_name.toLowerCase()) return -1
                    if(a.location.merchant_name.toLowerCase() > b.location.merchant_name.toLowerCase()) return 1
                    return 0
                })
                return locations;
            });
    }
}