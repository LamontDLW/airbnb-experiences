import React from 'react';
import star from '../assets/star.png'

export default function Card(props) {
  return (
    <div className="card">
        {props.openSpots === 0 && <div className='card-badge'>SOLD OUT</div>}
        <img className='card-hero' src={props.coverImg} alt={props.title} />
        <div className='card-stats'>
            <img className='card-star' src={star} />
            <p className='rating'>{props.stats.rating}</p>
            <p className='rating-count'>({props.stats.reviewCount})</p>
            <p className='location'>{props.country}</p>
        </div>
        <p className='title'>{props.title}</p>
        <p className='cost'>From <strong>${props.price}</strong> / person</p>
    </div>
  );
}