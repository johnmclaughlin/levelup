import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Detail from './Detail';

export default class LocationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchantLocation: null,
    };
  }

  // componentWillMount() {
  //   const { id } = this.props.match.params;
  //   const location = this.props.locations.filter(e => e.location.id === id);
  //   this.setState(() => ({
  //     merchantLocation: location[0].location,
  //   }));
  // }

  componentWillMount() {
    const id = this.props.match.params.id;
    const location = this.props.locations.filter(e => e.location.id.toString() === id.toString());
    this.setState(() => ({
      merchantLocation: location[0].location,
    }));
  }

  render() {
    return (
      <div>
        {!this.state.merchantLocation
                    ? <div className="header">
                      <div className="title">Level<span>Up</span> Merchant Locations</div>
                      <Link className="btn btn-filter btn-lg btn-detail" to="/" href="/" onClick={this.props.getLocations}>Reload Data</Link>
                      </div>
                    : <div>
                      <div className="header">
                        <div className="title">Level<span>Up</span> Merchant Locations</div>
                        <Link className="btn btn-filter btn-lg btn-detail" to="/" href="/">Back to your results</Link>
                      </div>
                      <Detail location={this.state.merchantLocation} />
                    </div>
                }
      </div>
    );
  }
}

// This need a better definition
LocationDetail.propTypes = {
  locations: PropTypes.array.isRequired,
};
