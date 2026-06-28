import React from 'react'
import DividerComponent from './DividerComponent'
import "../_dist/MomentsCards.css"
import CarousselWedding from './CarousselWedding'

const MomentsCards = () => {
  return (
    <div className='Moments-container'>
        <DividerComponent/>
        <h1>Nos Moments Précieux</h1>
        <p>لكل صورة حكاية، ولكل لحظة ذكرى... استمتعوا برحلتنا المليئة بالحب والفرح</p>
    <CarousselWedding/>

    </div>
  )
}

export default MomentsCards
