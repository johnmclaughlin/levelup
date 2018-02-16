import React, {Component} from 'react';
import { Link } from 'react-router-dom';
var PropTypes = require('prop-types');

function LocationGrid (props) {
    return(
        <ul className="location-list">
            {props.locations.map(function(location, index){
                let site = location.location;
                let merchantName;

                // A little conditional rendering to keep titles clean
                if(site.merchant_name.includes('Caffè Nero')){
                    merchantName = 'Caffè Nero';
                } else if(site.merchant_name.includes('Formaggio Kitchen')){
                    merchantName = 'Formaggio Kitchen';
                } else if(site.merchant_name.includes('Flame Cafe')){
                    merchantName = 'Flame Cafe';
                } else {
                    merchantName = site.merchant_name;
                }

                return(
                <li key={site.merchant_name} className="location-item">
                <Link className="merchant-link" to={`/${site.id}`}>
                    <img
                        className="avatar"
                        src={site.image_url}
                        alt={'Image for ' + site.merchant_name} 
                    />
                    <div className="merchant-name">{merchantName}</div>
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

class FilterInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         userInput: '',
         filteredLocations: ''
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      var value = event.target.value;
      this.setState(function() {
        return {
          userInput: value
        }
      })
    }
  
    handleSubmit(event) {
      event.preventDefault();

      this.setState(function() {
        return {
          userInput: "Filter by restaurant name"
        }
      })

      this.props.onSubmit(
          this.state.userInput
      )
    }
  
    render() {
      return(
        <form className="filter-results" onSubmit={this.handleSubmit}>
          <label className="filter-label" htmlFor="userInput">
            {this.props.label}
          </label>
          <input 
            id="userInput"
            placeholder="Filter by restaurant name"
            type="text"
            autoComplete="off"
            value={this.state.userInput}
            onChange={this.handleChange}
            />
          <button
            className="btn btn-filter btn-lg"
            type="submit"
            disabled={!this.state.userInput} >
            Submit
            </button>
        </form>
      )
    }
  }
  
  FilterInput.PropTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

export default class AllLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           userSubmit: '',
           filteredLocations: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetResults = this.resetResults.bind(this);
    }
    
    handleSubmit(userInput) {
        let filteredInput = this.props.locations.filter(function (e) {
            return e.location.merchant_name.toLowerCase().startsWith(userInput.toLowerCase());
        });
        this.setState(function () {
            var newState = {
                userSubmit: 'Filter by restaurant name',
                filteredLocations: filteredInput
            };
            return newState;
        });
    }

    resetResults() {
        this.setState(function () {
            var newState = {
                userSubmit: 'Filter by restaurant name',
                filteredLocations: ''
            };
            return newState;
        });
    }

    render() {
        let locations;
        this.state.filteredLocations.length > 0 ? locations = this.state.filteredLocations : locations = this.props.locations;
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
                    <Link className="btn btn-filter btn-border btn-lg" to={`/`} onClick={this.resetResults}>Reset</Link>
                    </div>
                </div>
                {!this.props.locations
                    ? <p>Loading...</p>
                    : <LocationGrid locations={locations} />
                }
            </div>
        )
    }
}