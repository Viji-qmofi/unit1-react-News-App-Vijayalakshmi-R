import React from 'react'
import Calendar from './Calendar'
import Weather from './Weather'
import './News.css'

const News = () => {
  return (
    <div className='news'>
      <header className="news-header">News Header</header> 
      <div className="news-content">
            <div className="navbar">
                  <div className="user">User</div>
                  <nav className="categories">Home</nav>
                  <div className="contact-us">Contact Us</div>
            </div>
            <div className='news-section'>
                  <div className="headline">HeadLine</div>
                  <div className="news-grid">News Grid</div>
            </div>
            <div className="weather-calendar">
                  <Weather />
                  <Calendar />
            </div>


      </div>
      <footer className="news-footer">Footer</footer>        
    </div>
  )
}

export default News