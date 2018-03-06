import React from 'react';
import PropTypes from 'prop-types';
import FilterInput from './FilterInput';
import LocationGrid from './LocationGrid';
import Button from './Button';
import utils from '../utils/utils';

export default class AllLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredLocations: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetResults = this.resetResults.bind(this);
  }

  handleSubmit(userInput) {
    const filteredInput = utils.filteredInput(this.props.locations, userInput);

    this.setState(() => {
      const newState = {
        userSubmit: 'Filter by restaurant name',
        filteredLocations: filteredInput,
      };
      return newState;
    });
  }

  resetResults() {
    this.setState(() => {
      const newState = {
        userSubmit: 'Filter by restaurant name',
        filteredLocations: '',
      };
      return newState;
    });
  }

  render() {
    const locations = utils.filteredPresent(this.state.filteredLocations, this.props.locations);
    return (
      <div>
        <div className="header">
          <div className="title">Level<span>Up</span> Merchant Locations</div>
          <div className="filter">
            <FilterInput
              id="userInput"
              onSubmit={this.handleSubmit}
              locations={this.props.locations}
            />
            <Button className="btn btn-filter btn-border btn-lg" to="/" onClick={this.resetResults} label="Reset" />
          </div>
        </div>
        {!this.props.locations
                    ? <p>Loading...</p>
                    : <LocationGrid locations={locations} />
                }
      </div>
    );
  }
}

// This need a better definition
AllLocations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
