import { Component } from 'react';
import CityDataForm from './CityDataForm';
import MapContainer from './MapContainer';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityData: []
        }
    }

    handleCityInput = (cityDataInput) => {

        this.setState({ cityData: cityDataInput });
    };


    render() {
        return (
            <>
                <div className='weatherContainer'>
                    <div>
                        <CityDataForm onSubmitHandler={this.handleCityInput}></CityDataForm>
                        <p>Name: {this.state.cityData.display_name}</p>
                        <p>Lat: {this.state.cityData.lat}</p>
                        <p>Lon: {this.state.cityData.lon}</p>
                    </div>
                    <MapContainer cityInfo={this.state.cityData}></MapContainer>
                </div>
            </>
        );
    }
};

export default Main;