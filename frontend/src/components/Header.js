import React from "react"
import { useMediaQuery } from "react-responsive"

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 767 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

function Header() {
    return(<>
    <section className="header-section">
    <div className="header">
        <div className="nav-container">
            <nav className="navbar">
                <div className="logo-container">
                    <img className="logo" src="logo-in8-dev.svg" alt="logo"></img>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#cadastro">cadastro</a>
                    </li>
                    <hr className="header-hr"></hr>
                    <li className="nav-item">
                    <a href="#lista">lista</a>
                    </li>
                    <hr className="header-hr"></hr>
                    <li className="nav-item">
                    <a href="#sobre">sobre mim</a>
                    </li>
                </ul>

            </nav>
            <div className="header-container">
                <h1 className="header-text">ESTÁGIO</h1>
                <h2 className="header-subtext">PROVA DE SELEÇÃO</h2>
            </div>
        </div>
     
    </div>
        <Desktop>
            <img className="index-img" src="imagens/index-image.jpg" alt="estagio prova de seleção desktop"></img>    
        </Desktop>
        <Mobile>
        <img className="index-img" src="imagens/index-image-mobile.jpg" alt="estagio prova de seleção mobile"></img>
        </Mobile>
    </section>
    </>
    )
}

export default Header