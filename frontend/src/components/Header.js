import React from "react"


function Header() {
    return(<>
    <div className="nav-container">
        <nav className="navbar">
            <ul>
                <li className="logo">
                    <img src="logo-in8-dev.svg" alt="logo"></img>
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