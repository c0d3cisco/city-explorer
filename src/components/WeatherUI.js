import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';


export default class WeatherUI extends Component {


    render() {

        console.log(this.props.weatherData);

        let AccordionList = this.props.weatherData.map((weatherDay, idx) => {
            return (
                <Accordion.Item eventKey={idx}>
                    <Accordion.Header>{weatherDay.weatherDate}</Accordion.Header>
                    <Accordion.Body>
                        {weatherDay.weatherDescription}
                    </Accordion.Body>
                </Accordion.Item>
            )
        });
        console.log(AccordionList);
        return (
            <Accordion>
                {AccordionList}
            </Accordion>
        );
    }
}