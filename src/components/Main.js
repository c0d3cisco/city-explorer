import { Component } from 'react';
import CityDataForm from './CityDataForm';
import MapContainer from './MapContainer';
import WeatherUI from './WeatherUI';
import MovieListUI from './MovieListUI';




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityDataArr: [], //will be condenced array descriptions and dates
            weather16Arr: [{ weatherDate: `Load City`, weatherDescription: 'load City' }],
            movieSearch: [{
                movieTitle: 'search a city',
                movieReleaseDate: 'search a city',
                movieDescription: 'search a city',
                movieImage: 'https://placehold.jp/500x800.png'
            }]
        }
    }

    handleCityInput = (stateName, cityDataInput) => {

        this.setState({ [stateName]: cityDataInput });

    };



    render() {
        console.log(this.state);
        return (
            <>
                <div className='weatherContainer'>
                    <div>
                        <CityDataForm
                            onSubmitHandler={this.handleCityInput}
                            cityData={this.state.cityDataArr}
                            noErrorDetected={this.props.noErrorDetected}
                            onError={this.props.captureErrorHandler}>
                        </CityDataForm>

                        {this.props.error
                            ? <p>Error:<br /><br />{this.props.errorMessage}</p>
                            : <>
                                <p>Name: {this.state.cityDataArr.display_name}</p>
                                <p>Latitude: {this.state.cityDataArr.lat}</p>
                                <p>Longitude: {this.state.cityDataArr.lon}</p>
                            </>}
                    </div>
                    <MapContainer cityInfo={this.state.cityDataArr}></MapContainer>
                </div>
                <div className='uiContainer'>
                    <WeatherUI weatherData={this.state.weather16Arr}></WeatherUI>
                    <MovieListUI movieData={this.state.movieSearch}></MovieListUI>
                </div>
            </>
        );
    }
};

export default Main;