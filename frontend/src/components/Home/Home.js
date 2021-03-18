/* eslint-disable no-unused-vars */
import React from 'react';
import Product from '../Product/Product';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home__img" src="/background.jpg" alt="bg-img" />

        <div className="home__row">
          <Product
            title="Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant"
            price={60}
            imageLink="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SX679_.jpg"
            rating={3}
          />
          <Product
            title="JBL Live 500BT Wireless Over-Ear Voice Enabled Headphones"
            price={100}
            imageLink="https://images-na.ssl-images-amazon.com/images/I/81eLiL6SApL._SL1500_.jpg"
            rating={4}
          />
          <Product
            title="Harry Potter"
            price={10}
            imageLink="/book.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
