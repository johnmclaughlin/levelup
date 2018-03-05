import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 16,
    };
  }

  render() {
    const latLong = this.props.position;
    return (
      <Map center={latLong} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latLong}>
          <Popup>
            <span>
              {this.props.merchant}
            </span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

LocationMap.defaultProps = {
  position: [42.272397, -71.068382],
  merchant: 'Merchant Name',
};

LocationMap.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  merchant: PropTypes.string,
};
