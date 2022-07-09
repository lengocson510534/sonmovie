import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiConfig from '../../api/apiConfig';
import tmdbAPi from '../../api/api';

const CastList = props => {

  const { category } = useParams();
  const [casts, setCasts] = useState([])

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbAPi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    }
    getCredits()
  }, [category, props.id])

  return (
    <div className='grid grid-cols-auto gap-3'>
      {
        casts.map((item, i) => (
          <div key={i}>
            <div style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}
              className="pt-40 bg-cover mb-2"
            ></div>
            <p className='text-sm'>{item.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CastList