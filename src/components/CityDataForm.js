import { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
// import process from "process"; 

export default class cityDataForm extends Component {

  handleCityInput = (evt) => {
    console.log(evt.target.value);
    this.setState({
      city: evt.target.value
    })
  }

  getCityData = async (evt) => {
    evt.preventDefault();

    try {
      // let urlData = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=47.6038321,-122.330062&size=600x600&zoom=14&path=fillcolor:%2390EE90|weight:2|color:blue|47.6038321,-122.330062`;
      let urlData = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
      let cityData = await axios.get(urlData);

      //golgi apparatus
      console.log('cityData.data[0]: ', cityData.data[0].lat);
      this.props.noErrorDetected();
      this.handleWeatherAPI(cityData.data[0]);
      this.handleMovieAPI(this.state.city);
      this.props.onSubmitHandler('cityDataArr',cityData.data[0]);
    } 
    catch(error) {
      console.log('error: ',error);
      this.props.onError(error);
    }
  };


  handleWeatherAPI = async (cityArr) => {
    try{ 
      let urlWeather = `${process.env.REACT_APP_SERVER}/weather?lat=${parseFloat(cityArr.lat)}&lon=${parseFloat(cityArr.lon)}`;
      let weatherData = await axios.get(urlWeather);
      console.log(weatherData.data);
      this.props.onSubmitHandler('weather16Arr',weatherData.data);
    } 
    catch(error) {
      console.log('error: ',error);
      this.props.onError(error);
    }
  };

  handleMovieAPI = async (city) => {
    try {
      let urlMovie = `${process.env.REACT_APP_SERVER}/movie?cityName=${city}`
      let movieData = await axios.get(urlMovie);
      console.log(movieData.data);
      this.props.onSubmitHandler('movieSearch',movieData.data);

    } catch (error) {
      this.props.onError(error);
    }
  }

  render() {
    return (
      <Form onSubmit={this.getCityData} className='formContainer'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className='formContainer'>
            <Form.Control onChange={this.handleCityInput} type="text" placeholder="City" className='textBoxForm'/>
            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </div>
          <Form.Text>
            Search a city for its latitude and longitude.
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
};