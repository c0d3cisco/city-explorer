import { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default class cityDataForm extends Component {

  handleCityInput = (evt) => {
    console.log(evt.target.value);
    this.setState({
      city: evt.target.value
    })
  }

  getCityData = async (evt) => {
    evt.preventDefault();
    let urlData = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
    let cityData = await axios.get(urlData);

    // console.log(cityData.data[0]);
    this.props.onSubmitHandler(cityData.data[0]);
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