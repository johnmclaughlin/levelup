import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LocationMap from './LocationMap';

function Detail (props) {
    var imgUrl = props.location.image_url;
    var merchantDetailStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        height: '66vw',
        maxHeight: '660px'
      };
    var position = [props.location.latitude, props.location.longitude];

    return(
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
                        <li>{props.location.locality}, {props.location.region}, {props.location.postal_code}</li>
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
                        <li><Link className="external-link" to={props.location.delivery_menu_url}>Our Delivery Menu &#8594;</Link></li>
                    }
                    {props.location.facebook_url !== null&&
                        <li><Link className="external-link" to={props.location.facebook_url}>Our Facebook Page &#8594;</Link></li>
                    }
                    {props.location.hours !== '' &&
                        <li>Hours: {props.location.hours}</li>
                    }
                </ul>
                <div id="map"><LocationMap position={position} merchant={props.location.merchant_name}/></div>
            </div>
        </div>
    )
}

export default class LocationDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            merchantLocation: null
        }
      }
    
      componentDidMount(){
        let id = this.props.match.params.id;
        let location = this.props.locations.filter(function (e) {
            return e.location.id == id;
        });
        this.setState(function(){
            return {
                merchantLocation: location[0].location
            }
        }.bind(this))

    }

    resetResults() {
        window.location.replace("/");
    }
    
    render() {
        return (
            <div>
                {!this.state.merchantLocation
                    ? <div className="header">
                            <div className="title">Level<span>Up</span> Merchant Locations</div>
                            <Link className="btn btn-filter btn-lg btn-detail" to={`/`} onClick={this.props.getLocations}>Reload Data</Link>
                        </div>
                    : <div>
                        <div className="header">
                        <div className="title">Level<span>Up</span> Merchant Locations</div>
                        <Link className="btn btn-filter btn-lg btn-detail" to={`/`}>Back to your results</Link> 
                        </div> 
                        <Detail location={this.state.merchantLocation} />
                        </div>
                }
            </div>
        )
    }
}
