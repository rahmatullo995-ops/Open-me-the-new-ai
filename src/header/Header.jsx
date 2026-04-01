import React from 'react'
import imageGroup from "../assets/Group.png"
import imagePoland from "../assets/avatar.png"
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header className='head--header'>
        <section className='section--header'>
            <Link to={"/"}>
                <img src={imageGroup}/>
            </Link>
            <input type="text" placeholder='Seacrh...'/>
            <h3>X'eriya Ponald</h3>
        </section>
        <nav className='navbar--header'>
            <Link to={'/dashboard'}>
                Dashboard
            </Link>
            <Link>
                Products
            </Link>
            <Link>
                Categories
            </Link>
        </nav>
    </header>
  )
}

export default Header