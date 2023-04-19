import {Component} from 'react';
import Image from 'react-bootstrap/Image'
// import axios from 'axios';



export default class MapContainer extends Component {
    
    render() {
        let urlMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.props.cityInfo.lat},${this.props.cityInfo.lon}&zoom=13&format=png`;
        
        return (
            <div className='imageMapDiv'>
                <Image src={urlMap} alt='Map of the city' rounded className='imageMap'/>
            </div>
        )        
    }

};
