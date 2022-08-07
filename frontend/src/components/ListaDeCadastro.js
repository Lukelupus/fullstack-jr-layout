import React, { useState, useEffect, useMemo } from 'react'
import { useTable } from "react-table"
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

    const fetchRegistrationData = async () => {
        const response = axios.get("/").catch(err => {
            console.log(err)
        })

        if(response) {
            const registeredUsers = response.data;

            console.log(registeredUsers)
            setTableData(registeredUsers)
        }
    }

    const data = useMemo(
        () => 
        [
            {
                "id": 1,
                "nome": "Fulano Beltrano de Oliveira da Silva",
                "email": "fulanobos@gmail.com",
                'birth': "13/10/1995",
                "tel": "(31) 9 9666-1111"

            },
            {
                "id": 2,
                "nome": "",
                "email": "",
                'birth': "",
                "tel": ""

            },
            {
                "id": 3,
                "nome": "",
                "email": "",
                'birth': "",
                "tel": ""

            },
            {
                "id": 4,
                "nome": "",
                "email": "",
                'birth': "",
                "tel": ""

            },
        ], []
    )

 
    const columns = useMemo(
        () => ([
            {
                Header: "",
                accessor: "id"
            },
            {
                Header: "NOME",
                accessor: "nome"
            },
            {
                Header: "E-MAIL",
                accessor: "email"
            },
            {
                Header: "NASCIMENTO",
                accessor: "birth"
            },
            {
                Header: "TELEFONE",
                accessor: "tel"
            },
            ]), []
            )


    const tableInstance = useTable({columns, data});

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    useEffect(() => {
        fetchRegistrationData()
    }, [])

  
    return(
        <>
            <div id="lista" className="white-section">
                <h2 className="list-title">LISTA DE CADASTRO</h2>
                <table className='desktop-table' {...getTableProps()}>
                    <thead >
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th className='table-heading' {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))
                                }

                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {   
                            prepareRow(row)
                            return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                <td className='table-data' {...cell.getCellProps()}>
                                {cell.render('Cell')}
                                </td>
                            )
                            })
                            }
                            </tr>
                            )})
                                   }
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