import React from "react"


function Header() {
    return(<>
    <div className="nav-container">
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <img className="logo" src="logo-in8-dev.svg" alt="logo"></img>
                </li>
                <li className="nav-item">
                    <a href="#cadastro">Cadastro</a>
                </li>
                <li className="nav-item">
                <a href="#lista">Lista</a>
                </li>
                <li className="nav-item">
                <a href="#sobre">Sobre Mim</a>
                </li>
            </ul>

        </nav>
            
    </div>
            
        
    </>
    )
}

export default Header