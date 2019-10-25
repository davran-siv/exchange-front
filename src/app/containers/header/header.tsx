import Search from 'app/components/search/search'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

interface HeaderProps {

}

const Header = (props: HeaderProps) => {
  return (
    <div className='header'>
      <div className="header__inner">
        <img src="/assets/icons/logo.svg" alt="logo" className='header__inner__logo'/>
        <Search/>
      </div>
      <div className='header__menu'>
        <Link to='/'>Войти</Link>
      </div>
    </div>
  )
}

export default Header