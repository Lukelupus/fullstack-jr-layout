import React from 'react'

import { useMediaQuery } from "react-responsive"

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 767 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

function Footer() {
    return(
        <>
            <div className='footer'>
                <div className='footer-info'>
                    <p className='info-text'>Fulano Beltrano de Oliveira</p>
                    <p className='info-text'>fulanobos@gmail.com</p>
                    <p className='info-text'>(31) 9 9666-1111</p>
                    <p className='info-text'>Faculdade de Belo Horizonte</p>
                </div>
                <Desktop>
                    <img className='index-img' alt='footer img' src='imagens/rodape-desktop.jpg'></img>
                </Desktop>
                <Mobile>
                    <img className='index-img' alt='footer img' src='imagens/rodape-mobile.jpg'></img>
                </Mobile>
            </div>
        </>
    )
}


export default Footer