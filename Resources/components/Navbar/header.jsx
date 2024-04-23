import React, { useEffect, useState } from 'react'
import './header.css'
import logo from '../../src/assets/UM+Centro de Educación a Distancia.png'

const header = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <img src={logo} alt="logo" className='logo' />
    <ul>
    
        <li><button className='btn'>Home</button></li>
    
        <li>Categories</li>
    </ul>
    </nav>
  )
}

export default header