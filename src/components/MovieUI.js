import { Component } from 'react';  //destructuring
import Carousel from 'react-bootstrap/Carousel';



export default class MovieUI extends Component {


    render() {
        const {infoSource, ...rest} = this.props //rest parameter // destructure
        // console.log(this.props.infoSource);
            return (

                <Carousel.Item {...rest}>
                    <img
                        className="d-block w-100"
                        src={infoSource.movieImage}
                        alt={"Poster Image for " + infoSource.movieTitle}
                    />
                    <Carousel.Caption>
                        <h3>{infoSource.movieTitle}</h3>
                        <h4>{infoSource.movieReleaseDate}</h4>
                        <p>{infoSource.movieDescription}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            )

    }
}