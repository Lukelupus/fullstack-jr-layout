import React, { useState } from "react"
import hamburguer from "../icones/hamburguer.svg"
import hamburguerAberto from "../icones/hamburguer-aberto0.svg"
import { useMediaQuery } from "react-responsive"

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

function Header() {

    const [active, setActive] = useState(false)

    function onClick(e) {
        
        if(active === false) {
            setActive(true)
        } 
        if (active === true) {
            setActive(false)
        }
     e.preventDefault()
    }
    return(<>

    <section id="top" className="header-section">
    <div className="header">
        <div className="nav-container">
            <nav className="navbar">
                <div className="logo-container">
                    <img className="logo" src="logo-in8-dev.svg" alt="logo"></img>
                </div>
                <div className={active ? "nav-menu" : "nav-menu active" }>
                    <ul className="navbar-nav">
                        <li className={active ? "nav-item" : "nav-item active" }>
                            <a className="a-header" href="#cadastro">cadastro</a>
                        </li>
                        <hr className="header-hr"></hr>
                        <li className={active ? "nav-item" : "nav-item active" }>
                        <a className="a-header" href="#lista">lista</a>
                        </li>
                        <hr className="header-hr"></hr>
                        <li className={active ? "nav-item" : "nav-item active" }>
                        <a className="a-header" href="#sobre">sobre mim</a>
                        </li>
                    </ul>
                    <div onClick={onClick} className="hamburguer">
                    {active ? (<>
                        <img className="hamburguer-img" alt="hamburguer" src={hamburguer}></img>
                        <img className="hamburguer-aberto-img" alt="hamburguer" src={hamburguerAberto}></img>
                        </>) 
                        : 
                        (<>
                        <img className="hamburguer-img active" alt="hamburguer" src={hamburguer}></img>
                        <img className="hamburguer-aberto-img active" alt="hamburguer" src={hamburguerAberto}></img>
                        </>) 
                      }
                       
                            
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
        <Tablet>
            <img className="index-img" src="imagens/index-image-tablet.jpg" alt="estagio prova de seleção desktop"></img>    
        </Tablet>
        <Mobile>
        <img className="index-img" src="imagens/index-image-mobile.jpg" alt="estagio prova de seleção mobile"></img>
        </Mobile>
    </section>
    </>
    )
}

export default Header