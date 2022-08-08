import React, { useState, useEffect } from 'react'
import { useMediaQuery } from "react-responsive"
import TopoPagina from "../icones/topo-pag.svg"
import axios from 'axios'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

function ListaDeCadastro() {

    const [tableData, setTableData] = useState([]);
    const [url, setUrl] = useState('')
    const [click, setClick] = useState(1)


    function selectTableOne(e) {
        setClick(1)
    }
    function selectTableTwo(e) {
        setClick(2)
    }
    function selectTableThree(e) {
        setClick(3)
    }
    function selectTableFour(e) {
        setClick(4)
    }

    const instance = axios.create({baseURL: 'http://localhost:5000'})
   

    useEffect(() => {
        
            try {
               instance.get('/').catch(err => {
                  console.log(err)
              }).then(res => {
                  setTableData(res.data)
                  setUrl(res.data)
                 
              })
              
            } catch (error) {
              
            } 
  
         
      
        
    }, [instance, url])


  
    return(
        <>
            <div id="lista" className="white-section">
                <h2 className="list-title">LISTA DE CADASTRO</h2>
                <table className='desktop-table'>
                    <thead >
                        <tr>
                            <th className='table-heading'></th>
                            <th className='table-heading'>NOME</th>
                            <th className='table-heading'>E-MAIL</th>
                            <th className='table-heading'>NASCIMENTO</th>
                            <th className='table-heading'>TELEFONE</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td className='table-data'>1</td>
                            <td className='table-data'>{tableData.length === 0 ? "" : tableData[0].name}</td>
                            <td className='table-data'>{tableData.length === 0 ? "" : tableData[0].email}</td>
                            <td className='table-data'>{tableData.length === 0 ? "" : tableData[0].birth}</td>
                            <td className='table-data'>{tableData.length === 0 ? "" : tableData[0].tel}</td>
                        </tr>
                        <tr>
                            <td className='table-data'>2</td>
                            <td className='table-data'>{tableData.length <= 1 ? "" : tableData[1].name}</td>
                            <td className='table-data'>{tableData.length <= 1 ? "" : tableData[1].email}</td>
                            <td className='table-data'>{tableData.length <= 1 ? "" : tableData[1].birth}</td>
                            <td className='table-data'>{tableData.length <= 1 ? "" : tableData[1].tel}</td>
                        </tr>
                        <tr>
                            <td className='table-data'>3</td>
                            <td className='table-data'>{tableData.length <= 2 ? "" : tableData[2].name}</td>
                            <td className='table-data'>{tableData.length <= 2 ? "" : tableData[2].email}</td>
                            <td className='table-data'>{tableData.length <= 2 ? "" : tableData[2].birth}</td>
                            <td className='table-data'>{tableData.length <= 2 ? "" : tableData[2].tel}</td>
                        </tr>
                        <tr>
                            <td className='table-data'>4</td>
                            <td className='table-data'>{tableData.length <= 3 ? "" : tableData[3].name}</td>
                            <td className='table-data'>{tableData.length <= 3 ? "" : tableData[3].email}</td>
                            <td className='table-data'>{tableData.length <= 3 ? "" : tableData[3].birth}</td>
                            <td className='table-data'>{tableData.length <= 3 ? "" : tableData[3].tel}</td>
                        </tr>
                            
                                   
                    </tbody>
                </table>
                <Mobile>
                <div className='table-mobile-container'>
                     <div className='div-one'> 
                        <div className={click === 1? 'content-div active' : 'content-div'}>
                             <table >
                                <tr>
                                    <th className='table-heading  th-mobile'>NOME</th>
                                    <td className='table-data td-mobile'>{tableData.length === 0 ? "" : tableData[0].name}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>E-MAIL</th>
                                    <td className='table-data td-mobile'>{tableData.length === 0 ? "" : tableData[0].email}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>NASC.</th>
                                    <td className='table-data td-mobile'>{tableData.length === 0 ? "" : tableData[0].birth}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>TEL.</th>
                                    <td className='table-data td-mobile'>{tableData.length === 0 ? "" : tableData[0].tel}</td>
                                </tr>
                                </table> 
                            </div>
                            <div className={click === 2? 'content-div active' : 'content-div'}>
                             <table >
                                <tr>
                                    <th className='table-heading  th-mobile'>NOME</th>
                                    <td className='table-data td-mobile'>{tableData.length === 1 ? "" : tableData[1].name}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>E-MAIL</th>
                                    <td className='table-data td-mobile'>{tableData.length === 1 ? "" : tableData[1].email}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>NASC.</th>
                                    <td className='table-data td-mobile'>{tableData.length === 1 ? "" : tableData[1].birth}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>TEL.</th>
                                    <td className='table-data td-mobile'>{tableData.length === 1 ? "" : tableData[1].tel}</td>
                                </tr>
                                </table> 
                            </div>
                            <div className={click === 3? 'content-div active' : 'content-div'}>
                             <table >
                                <tr>
                                    <th className='table-heading  th-mobile'>NOME</th>
                                    <td className='table-data td-mobile'>{tableData.length === 2 ? "" : tableData[2].name}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>E-MAIL</th>
                                    <td className='table-data td-mobile'>{tableData.length === 2 ? "" : tableData[2].email}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>NASC.</th>
                                    <td className='table-data td-mobile'>{tableData.length === 2 ? "" : tableData[2].birth}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>TEL.</th>
                                    <td className='table-data td-mobile'>{tableData.length === 2 ? "" : tableData[2].tel}</td>
                                </tr>
                                </table> 
                            </div>
                            <div className={click === 4? 'content-div active' : 'content-div'}>
                             <table >
                                <tr>
                                    <th className='table-heading  th-mobile'>NOME</th>
                                    <td className='table-data td-mobile'>{tableData.length === 3 ? "" : tableData[3].name}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>E-MAIL</th>
                                    <td className='table-data td-mobile'>{tableData.length === 3 ? "" : tableData[3].email}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>NASC.</th>
                                    <td className='table-data td-mobile'>{tableData.length === 3 ? "" : tableData[3].birth}</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>TEL.</th>
                                    <td className='table-data td-mobile'>{tableData.length === 3 ? "" : tableData[3].tel}</td>
                                </tr>
                                </table> 
                            </div>
                          
                            
                        </div> 
                        <div className='number-container'>
                            <div onClick={selectTableOne} className={click === 1 ? 'content-number active' : "content-number"}>1</div>
                            <div onClick={selectTableTwo} className={click === 2 ? 'content-number active' : "content-number"}>2</div>
                            <div onClick={selectTableThree} className={click === 3 ? 'content-number active' : "content-number"}>3</div>
                            <div onClick={selectTableFour} className={click === 4 ? 'content-number active' : "content-number"}>4</div>
                        </div>
                </div>
                </Mobile>
                <Desktop>
                   <a href='#top'><img className='top-page-pointer' src={TopoPagina} alt='top'></img></a>
                </Desktop>
            </div>
        </>
    )
}

export default ListaDeCadastro