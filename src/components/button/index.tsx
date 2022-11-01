import React from 'react'
import style from './button.module.scss'

type ButtonProps  = {children:string, onClick:()=>void, color:string}

const Button:React.FC<ButtonProps> = ({
	children,
	onClick,
  color,
  ...props
}) => {
  const className = `${style['button']} ${style[`button_${color}`]}`;
  return (
    <button
      onClick={onClick}
      className={className}
     
    >
      {children}
    </button>
  )
}

export default Button