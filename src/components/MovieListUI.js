import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MovieUI from './MovieUI';



export default class MovieListUI extends Component {


    render() {

        console.log(this.props.movieData);

        let CarouselList = this.props.movieData.map((movie) => {
            return (
                <MovieUI infoSource = {movie}/>
            )
        });

        console.log(CarouselList);
        return (
            <Carousel>
                {CarouselList}
            </Carousel>
        );
    }
}