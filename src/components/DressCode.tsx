import React from 'react'
import "../_dist/DressCode.css"
import DividerComponent from './DividerComponent'
const DressCode = () => {
  return (
   <section className='dress-code-container'>
    <DividerComponent/>
    <h1>Dress Code</h1>
    <p>حضوركم هو أجمل إطلالة في هذه المناسبة، واللباس متروك لاختياركم</p>
    <img src="./images/dress.png" alt="dress code" />
    

   </section>
  )
}

export default DressCode
