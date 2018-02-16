var axios = require('axios');

module.exports = {
    fetchMerchantLocations: function (url) {
        var encodedURI = window.encodeURI(url);
    
        return axios.get(encodedURI)
            .then(function(response) {
                return response.data;
            });
    }
}