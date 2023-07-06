import React from 'react'
import { NavLink } from "react-router-dom"

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <NavLink to={'/posts'}>ЗДЕСЬ БУДЕТ ЛОГО</NavLink>
    </div>
  )
}

export default Header