import {Component} from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

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
            let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`

            let cityData = await axios.get(url);
            // console.log(cityData.data[0]);
            this.props.onSubmitHandler(cityData.data[0]);
            this.setState({ error: false, errorMessage: 'Connected' });
        } catch (error) {
            this.setState({ error: true, errorMessage: error.message });
        }
    };
    render() {
        return (
            <Form onSubmit={this.getCityData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.handleCityInput} type="text" placeholder="City" />
                <Form.Text>
                  Search a city for its latitude and longitude.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Explore!
              </Button>
            </Form>
          );
        }
    };