import React from 'react';
import hero_image from '../assets/hero-image.png'

export default function Hero() {
  return (
    <div className="hero">
        <img src={hero_image} className="hero-image" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts. All without leaving your home.</p>
    </div>
  );
}