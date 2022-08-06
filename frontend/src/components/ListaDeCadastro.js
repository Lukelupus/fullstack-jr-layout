import React, { useState, useEffect, useMemo } from 'react'
import { useTable } from "react-table"
import { useMediaQuery } from "react-responsive"
import TopoPagina from "../icones/topo-pag.svg"
import axios from 'axios'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
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
                <h2 className="list-title">Lista de Cadastro</h2>
                <table {...getTableProps()}>
                    <thead className=''>
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
                <Desktop>
                   <a href='#top'><img className='top-page-pointer' src={TopoPagina} alt='top'></img></a>
                </Desktop>
            </div>
        </>
    )
}

export default ListaDeCadastro