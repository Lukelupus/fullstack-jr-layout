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
    const instance = axios.create({baseURL: 'http://localhost:5000'})
    const fetchRegistrationData = async () => {
          try {
            await instance.get('/').catch(err => {
                console.log(err)
            }).then(res => {
                console.log(res.data)
                setTableData(res.data)
               
            })
            
          } catch (error) {
            
          } 

       
    }

    useEffect(() => {
        fetchRegistrationData()
    }, [])


  
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
                        <div className='content-div active'>
                             <table >
                                <tr>
                                    <th className='table-heading  th-mobile'>NOME</th>
                                    <td className='table-data td-mobile'>Fulano Beltrano de Oliveira da Silva</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>E-MAIL</th>
                                    <td className='table-data td-mobile'>fulanobos@gmail.com</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>NASC.</th>
                                    <td className='table-data td-mobile'>13/10/1995</td>
                                </tr>
                                <tr>
                                    <th className='table-heading th-mobile'>TEL.</th>
                                    <td className='table-data td-mobile'>(31) 9 9666-1111</td>
                                </tr>
                                </table> 
                            </div>
                          
                            
                        </div> 
                        <div className='number-container'>
                            <div className='content-number active'>1</div>
                            <div className='content-number'>2</div>
                            <div className='content-number'>3</div>
                            <div className='content-number'>4</div>
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