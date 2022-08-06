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
                <Desktop>
                    <img className='footer-img-desktop' alt='footer img' src='imagens/rodape-desktop.jpg'></img>
                </Desktop>
                <Mobile>
                    <img className='footer-img-mobile' alt='footer img' src='imagens/rodape-mobile.jpg'></img>
                </Mobile>
            </div>
        </>
    )
}


export default Footer