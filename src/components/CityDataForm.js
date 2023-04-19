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
      let urlData = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
      let cityData = await axios.get(urlData);
  
      console.log(cityData.data[0]);
      this.props.onSubmitHandler(cityData.data[0]);
      this.props.noErrorDetected();
    } 
    catch(error) {
      console.log('error: ',error);
      this.props.onError(error);
    }

    try{ 
      let urlWeather = `http://localhost:3001/weather?cityName=${this.state.city}`;
      let urlWeatherNOTWORKING = `${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.city}`;
      let weatherData = await axios.get(urlWeather);
      console.log(weatherData.data);
      console.log('URL that does not work => ',urlWeatherNOTWORKING);
    } 
    catch(error) {
      console.log('error: ',error);
      this.props.onError(error);
    }
  };

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