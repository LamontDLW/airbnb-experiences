import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import './index.css';
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card  key={item.id} {...item} />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
      <Footer />
    </div>
  );
}