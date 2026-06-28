import React from 'react'
import "../../_dist/EsdCompArrowsCaroussel.css"
import EsdCompArrowIcon from '../icons/EsdCompArrowIcon'

interface ArrowCarousselProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    onNext: ()=>void;
    onPrev: ()=>void;   
  }

const EsdCompArrowsCaroussel  : React.FC<ArrowCarousselProps>=({onNext,onPrev,...props}) => {
  return (
    <div {...props} className='arrows-container'>
        <EsdCompArrowIcon onClick={onPrev}/>
        <EsdCompArrowIcon direction='right' onClick={onNext}/>
    </div>
  )
}

export default EsdCompArrowsCaroussel