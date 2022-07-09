import React from 'react'
import MovieItem from '../MovieList/MovieItem'
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import tmdbAPi, { category, movieType, tvType } from '../../api/api';
import apiConfig from '../../api/apiConfig';

const MoviesGrid = (props) => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbAPi.getMoviesList(movieType.upcoming, { params });
            break;
          default:
            response = await tmdbAPi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword
        }
        response = await tmdbAPi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    }
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbAPi.getMoviesList(movieType.upcoming, { params });
          break;
        default:
          response = await tmdbAPi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword
      }
      response = await tmdbAPi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  }

  return (
    <div className='pt-24'>
      <div className='px-4'>
        <MovieSearch
          category={props.category} keyword={keyword}
        />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-y-9 pt-5'>
        {
          items.map((item, index) => (
            <MovieItem
              category={props.category}
              key={index}
              img={apiConfig.w500Image(item.poster_path)}
              name={item.name || item.title}
              year={item.first_air_date || item.release_date}
              quality={item.vote_average}
              id={item.id}
            />
          ))
        }
      </div>
      <div>
        {
          page < totalPage ? (
            <div className='text-center'>
              <button
                className='text-red-600 text-center border-solid border-red-600 border-[1px] px-8 py-2 rounded-3xl my-8'
                onClick={loadMore}
              >Load more</button>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

const MovieSearch = props => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
  const goToSearch = useCallback(
    () => {
      if (keyword.trim().length > 0) {
        navigate(`/${category[props.category]}/search/${keyword}`)
      }
    },
    [keyword, props.category, navigate],
  );

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    }
    document.addEventListener('keyup', enterEvent)
    return () => {
      document.removeEventListener('keyup', enterEvent)
    }
  }, [keyword, goToSearch])

  return (
    <div>
      <input type="text" placeholder='Enter keyword' value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="bg-bg-primary px-3 py-1 w-2/3 md:px-5 md:py-2 outline-none border-[1px] border-red-600 rounded-2xl md:w-1/3" />
      <button className='bg-red-600 px-3 py-1 mx-3 md:px-4 md:py-2 rounded-2xl font-semibold'
        onClick={goToSearch}
      >Search</button>
    </div>
  )
}

export default MoviesGrid