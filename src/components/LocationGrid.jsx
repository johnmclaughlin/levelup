import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LocationGrid = props => (

  <ul className="location-list">
    {props.locations.map((location) => {
                const site = location.location;
                let merchantName;

                // A little conditional rendering to keep titles clean
                if (site.merchant_name.includes('Caffè Nero')) {
                    merchantName = 'Caffè Nero';
                } else if (site.merchant_name.includes('Formaggio Kitchen')) {
                    merchantName = 'Formaggio Kitchen';
                } else if (site.merchant_name.includes('Flame Cafe')) {
                    merchantName = 'Flame Cafe';
                } else {
                    merchantName = site.merchant_name;
                }

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
