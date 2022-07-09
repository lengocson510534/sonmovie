import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import tmdbAPi from '../../api/api';

const VideoList = props => {

  const { category } = useParams();
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbAPi.getVideos(category, props.id);
      setVideos(res.results.slice(0, 5));
    }
    getVideos()
  }, [category, props.id])

  return (
    <div>
      {
        videos.map((item, i) => (
          <Video key={i} item={item} />
        ))
      }
    </div>
  )
}

const Video = props => {
  const item = props.item
  const iframeRef = useRef(null)

  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, [])

  return (
    <div className='my-8 mx-4'>
      <h2 className='mb-4 font-bold text-xl'>{item.name}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef} width="100%" title='video'
        className='mb-14'
      ></iframe>
    </div>
  )
}

export default VideoList