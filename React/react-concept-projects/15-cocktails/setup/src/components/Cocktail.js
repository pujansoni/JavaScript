import React from 'react'
import { Link } from 'react-router-dom'

// Here we also need to destructure the id and need access to the id of each cocktail as we will use that id in the Link to fetch more details about the particular cocktail
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}