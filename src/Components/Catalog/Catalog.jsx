import React from 'react'
import { useParams } from 'react-router-dom'
import MoviesGrid from '../MoviesGrid/MoviesGrid';


const Catalog = () => {

  const { category } = useParams();
  console.log(category)
  return (
    <div>
      <div>
        <MoviesGrid category={category} />
      </div>
    </div>
  )
}

export default Catalog