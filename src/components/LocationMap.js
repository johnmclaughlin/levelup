import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class LocationMap extends Component {
    constructor(props) {
    super(props);
    this.state = {
        zoom: 16,
        }
    }

  render() {
    const position = this.props.position;
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              {this.props.merchant}
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}