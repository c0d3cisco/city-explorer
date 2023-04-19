import { Component } from 'react';
import CityDataForm from './CityDataForm';
import MapContainer from './MapContainer';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityData: [],
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
                        <CityDataForm onSubmitHandler={this.handleCityInput} noErrorDetected={this.props.noErrorDetected} onError={this.props.captureErrorHandler}></CityDataForm>
                        {
                            this.props.error
                                ? <p>Error:<br/><br/>{this.props.errorMessage}</p>
                                : <>
                                    <p>Name: {this.state.cityData.display_name}</p>
                                    <p>Latitude: {this.state.cityData.lat}</p>
                                    <p>Longitude: {this.state.cityData.lon}</p>
                                </>}
                    </div>
                    <MapContainer cityInfo={this.state.cityData}></MapContainer>
                </div>
            </>
        );
    }
};

export default Main;