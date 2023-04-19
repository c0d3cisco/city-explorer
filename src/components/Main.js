import { Component } from 'react';
import CityDataForm from './CityDataForm';
import MapContainer from './MapContainer';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // city: '',
            cityDataArr: [], //will be condenced array descriptions and dates
        }
    }

    handleCityInput = (cityDataInput) => {
        
        this.setState({ cityDataArr: cityDataInput });
        
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
                                    <p>Name: {this.state.cityDataArr.display_name}</p>
                                    <p>Latitude: {this.state.cityDataArr.lat}</p>
                                    <p>Longitude: {this.state.cityDataArr.lon}</p>
                                </>}
                    </div>
                    <MapContainer cityInfo={this.state.cityDataArr}></MapContainer>
                </div>
            </>
        );
    }
};

export default Main;