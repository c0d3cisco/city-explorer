import { Component } from 'react';
import CityDataForm from './CityDataForm';


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
        // console.log(this.state.cityData);
    };


    render() {
        return (
            <>
                <CityDataForm onSubmitHandler={this.handleCityInput}></CityDataForm>
                <p>Name: {this.state.cityData.display_name}</p>
                <p>Lat: {this.state.cityData.lat}</p>
                <p>Lon: {this.state.cityData.lon}</p>
            </>
        );
    }
};

export default Main;