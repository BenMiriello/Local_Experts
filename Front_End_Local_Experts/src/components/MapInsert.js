import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Icon} from 'semantic-ui-react'

class MapInsert extends Component {
    
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
   
    render() {
        console.log(this.props.experience.start_lat)
        return (
        // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '40%', margin: '30px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: ''}}
                    defaultCenter={{
                        lat: this.props.experience.start_lat,
                        lng: this.props.experience.start_lon
                    }}
                    defaultZoom={14}
                >
                    <Icon name='map pin' size='large' color="orange"
                        lat={this.props.start_lat}
                        lng={this.props.start_lon}
                        text="My Marker"
                    />
                    {/* <AnyReactComponent
                    /> */}
                </GoogleMapReact>
            </div>
        );
    }
}

  export default MapInsert