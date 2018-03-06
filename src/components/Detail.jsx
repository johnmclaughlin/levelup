import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocationMap from './LocationMap';

const Detail = (props) => {
  const imgUrl = props.location.image_url;
  const merchantDetailStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    height: '66vw',
    maxHeight: '660px',
  };
  const position = [props.location.latitude, props.location.longitude];

  return (
    <div>
      <div className="merchant-detail" style={merchantDetailStyle}>
        <ul>
          {props.location.merchant_name.length > 0 &&
            <li><span>{props.location.merchant_name}</span></li>
                    }
          {props.location.merchant_description !== null &&
            <li>{props.location.merchant_description}</li>
                    }
          {props.location.name !== null &&
            <li>{props.location.name}</li>
                    }
          {props.location.locality !== null &&
            <li>{props.location.locality}, {props.location.region},{props.location.postal_code}</li>
                    }
          {props.location.phone !== null &&
            <li>{props.location.phone}</li>
                    }
          {props.location.accepts_tips_in_store === true &&
            <li>Accepts tips in store</li>
                    }
          {props.location.accepts_tips_on_delivery === true &&
            <li>Accepts tips on delivery</li>
                    }
          {props.location.accepts_tips_on_pickup === true &&
            <li>Accepts tips on pickup</li>
                    }
          {props.location.delivery_menu_url !== null &&
            <li>
              <Link
                className="external-link"
                href={props.location.delivery_menu_url}
                to={props.location.delivery_menu_url}
              >Our Delivery Menu &#8594;
              </Link>
            </li>
                    }
          {props.location.facebook_url !== null &&
            <li>
              <Link
                className="external-link"
                href={props.location.facebook_url}
                to={props.location.facebook_url}
              >Our Facebook Page &#8594;
              </Link>
            </li>
                    }
          {props.location.hours !== '' &&
            <li>Hours: {props.location.hours}</li>
                    }
        </ul>
        <div id="map"><LocationMap position={position} merchant={props.location.merchant_name} /></div>
      </div>
    </div>
  );
};

// This need a better definition - not very specfic at all!
Detail.propTypes = {
  location: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ])).isRequired,
};

export default Detail;
