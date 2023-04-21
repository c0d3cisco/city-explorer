import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';



export default class WeatherDayUI extends Component {


    render() {


            return (
                <Accordion.Item eventKey={this.props.idx}>
                    <Accordion.Header>{this.props.weatherDay.weatherDate}</Accordion.Header>
                    <Accordion.Body>
                        {this.props.weatherDay.weatherDescription}
                    </Accordion.Body>
                </Accordion.Item>
            )

    }
}