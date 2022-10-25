import './ReviewCard.css'
import Colton from './Assets/img/image-colton.jpg'
import Irene from './Assets/img/image-irene.jpg'
import Anne from './Assets/img/image-anne.jpg'
import React from 'react'

function ReviewCard() {
  return (
    <div className='review-card-container'>
      <div className="cards">

        <div className="card1 card">
        <div className="card-header">
          <img src={Colton} alt="" />
          <div className="heading-text">
            <h3>Colton Smith</h3>
            <h3 className='vb'>Verified Buyer</h3>
            </div>
          </div>
          <p>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
        </div>

        <div className="card2 card">
          <div className="card-header">
          <img src={Irene} alt="" />
          <div className="heading-text">
            <h3>Irene Roberts</h3>
            <h3 className='vb'>Verified Buyer</h3>
            </div>
          </div>
          <p>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>
        </div>

        <div className="card3 card">
          <div className="card-header">
          <img src={Anne} alt="" />
          <div className="heading-text">
            <h3>Anne Walace</h3>
            <h3 className='vb'>Verified Buyer</h3>
            </div>
          </div>
          <p>"Put an order with this company and can only praise them for the very high standard. Will definately use them again and recommend them to everyone!"</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard


