import React from 'react'
import { StyledA } from './styles'

interface ButtonProps {
  children?: string
  href?: string
  onClick?: any
  color?: string
}

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  href = '',
  onClick = () => {
    return false
  },
  color = '',
}) => {
  return (
    <StyledA href={href} onClick={onClick} className={color}>
      {children}
    </StyledA>
  )
}

export default Button
