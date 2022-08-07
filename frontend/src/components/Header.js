import React from "react"
import hamburguer from "../icones/hamburguer.svg"
import hamburguerAberto from "../icones/hamburguer-aberto0.svg"
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
    <section id="top" className="header-section">
    <div className="header">
        <div className="nav-container">
            <nav className="navbar">
                <div className="logo-container">
                    <img className="logo" src="logo-in8-dev.svg" alt="logo"></img>
                </div>
                <div className="nav-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="a-header" href="#cadastro">cadastro</a>
                        </li>
                        <hr className="header-hr"></hr>
                        <li className="nav-item">
                        <a className="a-header" href="#lista">lista</a>
                        </li>
                        <hr className="header-hr"></hr>
                        <li className="nav-item">
                        <a className="a-header" href="#sobre">sobre mim</a>
                        </li>
                    </ul>
                    <div className="hamburguer">
                        <img className="hamburguer-img" alt="hamburguer" src={hamburguer}></img>
                        <img className="hamburguer-aberto-img" alt="hamburguer" src={hamburguerAberto}></img>
                    </div>
                </div>

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