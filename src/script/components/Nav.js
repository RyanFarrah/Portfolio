import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () =>
  <nav>
    <section className='row'>
      <aside className='col-5'>
        <Link to='/'>Farrah Ryan</Link>
      </aside>
      <aside className='col'>
        <div className='row'>
          <NavLink className='col' to='/' exact>Projets</NavLink>
          <NavLink className='col' to='/about'>A propos</NavLink>
          <NavLink className='col' to='/contact'>Contact</NavLink>
        </div>
      </aside>
    </section>
  </nav>

export default Nav
