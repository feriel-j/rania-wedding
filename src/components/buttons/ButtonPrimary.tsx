import React from 'react'
import"../../_dist/ButtonPrimary.css"

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 id?:string 
}
const ButtonPrimary = ({...props}: ButtonPrimaryProps) => {
  return (
    <button {...props}  className={`hero-button ${props.className && props.className }`} >{props.children}</button>
  )
}

export default ButtonPrimary