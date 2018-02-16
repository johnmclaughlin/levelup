import React, {Component} from 'react';
import { Link } from 'react-router-dom';
var PropTypes = require('prop-types');

export default class FilterInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         userInput: '',
         filteredInput: null
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

      this.props.onSubmit(
          this.props.id,
          this.props.userInput
      )
  
    }
  
    render() {
        var filteredInput = this.state.filteredInput;
        var userInput = this.state.userInput;
        console.log('filteredInput', filteredInput);
        console.log('userInput', userInput);

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
            className="button"
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