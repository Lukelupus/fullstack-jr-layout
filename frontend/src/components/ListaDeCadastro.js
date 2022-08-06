import React from 'react'

const data = [
    {
        name: "",
        email:"",
        birth:"",
        tel:""
    },
]


function ListaDeCadastro() {
    return(
        <>
            <div id="lista" className="white-section">
                <h2 className="list-title">Lista de Cadastro</h2>
                <table>
                    <tr>
                        <th className='table-heading'></th>
                        <th className="table-heading">Nome</th>
                        <th className="table-heading">Email</th>
                        <th className="table-heading">Nascimento</th>
                        <th className="table-heading">Telefone</th>
                    </tr>
                    {data.map((val, key) => {
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.birth}</td>
                            <td>{val.tel}</td>

                        </tr>
                    })}
                </table>
            </div>
        </>
    )
}

export default ListaDeCadastro