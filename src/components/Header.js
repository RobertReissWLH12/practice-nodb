import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Gotta Catch 'Em All!</h1>
            <nav>
                <Link to="/">Pokedex </Link>
                <Link to="/catcher">Tall Grass</Link>
            </nav>
        </header>
    )
}

export default Header 