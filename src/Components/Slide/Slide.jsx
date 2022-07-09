import { useState, useEffect, useRef } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SlideItem from "./SlideItem";
import tmdbApi, { category, movieType } from "../../api/api"
import apiConfig from "../../api/apiConfig";
import Modal, { ModalContent } from "../Modal/Modal"

const NextSlider = (props) => {

  const { onClick } = props
  return (
    <div onClick={onClick}>
      <i className='z-[99] hover:cursor-pointer -translate-y-2/4 text-5xl absolute top-1/2 bx bx-chevrons-right right-6' ></i>
    </div>
  )
}

const PrevSlider = (props) => {
  const { onClick } = props
  return (
    <div onClick={onClick}>
      <i className='-translate-y-2/4 text-5xl absolute top-1/2 bx bx-chevrons-left left-7 z-[99] hover:cursor-pointer'></i>
    </div>
  )
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextSlider />,
  prevArrow: <PrevSlider />,
};

function Slide() {

  const [movieItems, setMovieItems] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieItems(response.results.slice(0, 4));
      } catch {
        console.log('error');
      }
    }
    getMovies();
  }, []);

  return (

    <div>
      <Slider {...settings}>
        {
          movieItems.map(item => (
            <SlideItem
              key={item.id}
              img={apiConfig.originalImage(item.backdrop_path)}
              name={item.title}
              img2={apiConfig.w500Image(item.poster_path)}
              desc={item.overview}
              author={item.popularity}
              date={item.release_date}
              id={item.id}
            />
          ))
        }
      </Slider>
      {
        movieItems.map((item, i) => <TrailerModal key={i} item={item} />)
      }
    </div>
  );
}

const TrailerModal = props => {
  const item = props.item;
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute('src', '');
  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose} id={item.id}>
        <iframe ref={iframeRef} width="100%" height="500px" title='trailer'></iframe>
      </ModalContent>
    </Modal>
  )
}
export default Slide;