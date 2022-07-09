import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import tmdbAPi from '../../api/api';
import apiConfig from '../../api/apiConfig';
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../Components/MovieList/MovieList';


const Detail = () => {

  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  console.log(id)

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbAPi.detail(category, id, { params: {} });
      setItem(response);
      window.scroll(0, 0);
    }
    getDetail();
  }, [category, id])

  return (
    <div>
      {
        item && (
          <>
            <div style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}
              className="relative bg-cover bg-no-repeat bg-center h-[50vh] opacity-60 w-full"></div>
            <div className='max-w-5xl mx-auto -mt-52 relative px-8 flex items-start justify-start'>
              <div className='md:flex-1 hidden md:block'>
                <div style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}
                  className="bg-cover bg-no-repeat h-[20vh] relative bg-center rounded-2xl pt-[165%]"
                ></div>
                <button className='text-red-500 px-3 py-1 border-2 border-solid border-red-500 rounded-3xl mt-6 hidden md:block'>Watch Now</button>
              </div>
              <div className='w-full md:w-[70%] md:ml-7 ml-0'>
                <h1 className="md:text-6xl text-4xl">
                  {item.title || item.name}
                </h1>
                <div className="my-9 flex flex-wrap">
                  {
                    item.genres && item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="text-sm px-4 ml-4 md:px-6 py-1 border-solid border-[1px] border-white rounded-2xl font-semibold mb-4">{genre.name}</span>
                    ))
                  }
                </div>
                <p className="pb-2">{item.overview}</p>
                <button className='text-lg text-red-600 border-[1px] border-solid rounded-3xl border-red-600 px-3 py-1 mt-4 md:hidden'>Watch Now</button>
                <div className="mt-8">
                  <div className="font-bold mb-2 text-xl">
                    <h2>Casts</h2>
                  </div>
                  <CastList id={item.id} />
                </div>
              </div>
            </div>
            <div>
              <VideoList id={item.id} />
            </div>
            <div>
              <MovieList category={category} type='similar' id={item.id} title="Similar" />
            </div>
          </>
        )
      }
    </div>
  )
}

export default Detail