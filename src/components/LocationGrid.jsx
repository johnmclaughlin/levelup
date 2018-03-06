import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import utils from '../utils/utils';

const LocationGrid = props => (

  <ul className="location-list">
    {props.locations.map((location) => {
                const site = location.location;
                const merchantName = utils.trimNames(site.merchant_name);

                return (
                  <li key={site.merchant_name} className="location-item">
                    <Link className="merchant-link" to={`/${site.id}`} href={`/${site.id}`}>
                      <img
                        className="avatar"
                        src={site.image_url}
                        alt={site.merchant_name}
                      />
                      <div className="merchant-name">{merchantName}</div>
                    </Link>
                  </li>
                );
            })}
  </ul>
);

// This need a better definition
LocationGrid.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LocationGrid;
