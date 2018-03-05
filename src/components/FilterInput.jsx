import React from 'react';
import PropTypes from 'prop-types';

export default class FilterInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      filteredLocations: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      userInput: value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(() => ({
      userInput: 'Filter by restaurant name',
    }));

    this.props.onSubmit(this.state.userInput);
  }

  render() {
    return (
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
          disabled={!this.state.userInput}
        >
            Submit
        </button>
      </form>
    );
  }
}

FilterInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
