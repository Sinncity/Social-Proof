import './StarCard.css'
import React from 'react'

export default function StarCard() {
  return (
    <div className='star-card-container'>
      <div className="sm-cards">

        <div className="sm-card1 sm-card">
          <div className="icon-container">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div>
          <h3>Rated Five Stars in Reviews</h3>
        </div>

        <div className="sm-card2 sm-card">
          <div className="icon-container">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div>
          <h3>Rated Five Stars in Report Guru</h3>
        </div>

        <div className="sm-card3 sm-card">
          <div className="icon-container">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div>
          <h3>Rated Five Stars in BestTech</h3>
        </div>
      </div>
    </div>
  )
}

