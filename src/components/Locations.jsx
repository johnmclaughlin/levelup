import React from 'react';
import { Switch, Route } from 'react-router-dom';
import api from '../utils/api';
import AllLocations from './AllLocations';
import LocationDetail from './LocationDetail';

export default class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line
      url: 'https://api.thelevelup.com/v15/locations',
      locations: null,
    };
  }

  componentWillMount() {
    this.getLocations();
  }

  getLocations() {
    api.fetchMerchantLocations(this.state.url)
      .then((locations) => {
        this.setState(() => ({
          locations,
        }));
      });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <AllLocations locations={this.state.locations} />} />
        <Route
          path="/:id"
          render={props =>
            <LocationDetail {...props} locations={this.state.locations} getLocations={() => this.getLocations()} />}
        />
      </Switch>
    );
  }
}
