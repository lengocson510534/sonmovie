import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import apiConfig from '../../api/apiConfig';
import tmdbAPi, { category } from '../../api/api';
import { Link } from 'react-router-dom';

function MovieList(props) {
  const { title, type, id, icon } = props

  const [items, setItems] = useState([])


  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      if (type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbAPi.getMoviesList(type, { params });
            break;
          default:
            response = await tmdbAPi.getTvList(type, { params });
        }
      }
      else {
        response = await tmdbAPi.similar(props.category, id);
      }
      setItems(response.results);
    }
    getList();
  }, [id, props.category, type]);

  const NextSlider = (props) => {
    const { onClick } = props
    return (
      <div onClick={onClick}>
        <i className='z-[100] hover:cursor-pointer -translate-y-2/4 text-5xl absolute top-1/2 bx bx-chevrons-right right-6' ></i>
      </div>
    )
  }

  const PrevSlider = (props) => {
    const { onClick } = props
    return (
      <div onClick={onClick}>
        <i className='-translate-y-2/4 text-5xl absolute top-1/2 bx bx-chevrons-left left-7 z-[100] hover:cursor-pointer'></i>
      </div>
    )
  }

  const [width, setWidth] = useState(5);

  useEffect(() => {
    const getWidth = (e) => {
      const width = window.innerWidth
      if (width <= 600)
        setWidth(2)
      else if (width <= 780)
        setWidth(3)
      else
        setWidth(5)
    }
    getWidth()
    window.addEventListener('resize', getWidth);
  }, [width])


  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width,
    slidesToScroll: 1,
    nextArrow: <NextSlider />,
    prevArrow: <PrevSlider />,
  };

  const link = `/${category[props.category]}}`

  return (
    <div className={`md:px-1 md:w-full`}>
      <div className='relative flex items-center justify-between px-2 py-14 md:px-24 
            before:h-[1px] before:bg-[#2C2B31] before:w-[86%] before:absolute before:bottom-1/4'>
        <div className='flex items-center justify-center'>
          <i className={`bx ${icon} text-3xl mr-3`}></i>
          <h2 className='text-xl md:text-3xl font-semibold'>{title}</h2>
        </div>
        <Link to={link}>
          <p className='capitalize text-red-600'>View All</p>
        </Link>
      </div>
      <div>
        <Slider {...settings}>
          {
            items.map((item, index) => (
              <div className='flex' key={index}>
                <MovieItem
                  img={apiConfig.w500Image(item.poster_path)}
                  name={item.name || item.title}
                  year={item.first_air_date || item.release_date}
                  quality={item.vote_average}
                  category={props.category}
                  id={item.id}
                  item={item}
                />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default MovieList;
