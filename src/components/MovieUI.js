import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';



export default class MovieUI extends Component {


    render() {

        console.log(this.props.movieData);

        let CarouselList = this.props.movieData.map((movie) => {
            return (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={movie.movieImage}
                        alt={"Poster Image for " + movie.movieTitle}
                    />
                    <Carousel.Caption>
                        <h3>{movie.movieTitle}</h3>
                        <h4>{movie.movieReleaseDate}</h4>
                        <p>{movie.movieDescription}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        });
        return (
            <Carousel>
                {CarouselList}
            </Carousel>
        );
    }
}