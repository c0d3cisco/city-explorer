import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import WeatherDayUI from './WeatherDayUI';


export default class WeatherUI extends Component {


    render() {

        console.log(this.props.weatherData);

        let AccordionList = this.props.weatherData.map((weatherDay, idx) => (
            <WeatherDayUI weatherDay={weatherDay} idx={idx}/>
        ));
        return (
            <Accordion>
                {AccordionList}
            </Accordion>
        );
    }
}