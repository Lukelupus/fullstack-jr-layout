import React from 'react'


function ListaDeCadastro() {
    return(
        <>
            <div id="lista" className="white-section">
                <h2 className="list-title">Lista de Cadastro</h2>
                <table>
                    <tr>
                        <th className="table-heading">Nome</th>
                        <th className="table-heading">Email</th>
                        <th className="table-heading">Nascimento</th>
                        <th className="table-heading">Telefone</th>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default ListaDeCadastro