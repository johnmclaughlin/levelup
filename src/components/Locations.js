import React from 'react';
import { Switch, Route } from 'react-router-dom';
var api = require('../utils/api');
var PropTypes = require('prop-types');
import AllLocations from './AllLocations';
import LocationDetail from './LocationDetail';

export default class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        url: 'https://gist.githubusercontent.com/aripollak/2590fb80d71d2dc136a315cf4b608537/raw/dbd05012e9afd0d2064d33bda1640262f976f4f1/locations.json',
        locations: null
    }
  }

  componentDidMount(){
      api.fetchMerchantLocations(this.state.url)
          .then(function(locations){
              this.setState(function(){
                  return {
                      locations: locations
                  }
              })
          }.bind(this));
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <AllLocations locations={this.state.locations} />} />
        <Route path='/:id' render={(props) => <LocationDetail {...props} locations={this.state.locations} />} />
      </Switch>
    )
  }
}