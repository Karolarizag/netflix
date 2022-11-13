import { MovieCard } from '../MovieCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css'

export const ShowMovies = ({props}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return(
    <>
      <Carousel 
        infinite={true}
        ssr={true}
        draggable={false}
        itemClass="carousel-item-padding-0-px"
        responsive={responsive}
      >
        {
          props.map(prop => {
            return <MovieCard movie={prop} key={prop.id} />
          })
        }
      </Carousel>
    </>
    )
}