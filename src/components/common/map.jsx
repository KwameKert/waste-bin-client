import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './mapMarker';

const MapComponent = ({bin}) => {
    console.log("bin ---> ", bin);
    const defaultProps = {
        center: {
          lat: 5.614818,
          lng: -0.205874
        },
        zoom: 11
      };
    return ( 
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDz1GC__-tJGp2YI2U6F-DOcTfJqd-rkVg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={bin.latitude}
          lng={bin.longitude}
          text={'B'}
        />
      </GoogleMapReact>
      </div>
     );
}
 
export default MapComponent;