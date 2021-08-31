import React from 'react';

import {greatPlaceStyle} from './marker_styles';
const Marker = ({text}) => {
    return ( <div style={greatPlaceStyle}>{text}</div> );
}
 
export default Marker;