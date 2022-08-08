import React, { useState } from "react"
import axios from 'axios'

function Cadastro() {

    const [telefone, setTelefone] = useState('');
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [nascimento, setNascimento] = useState('')
    const instance = axios.create({baseURL: 'http://localhost:5000'})
      async function postData() {
        try {
            await instance.post('/', {
                nome,
                email,
                nascimento,
                telefone
            }).catch(err => {
                console.log(err);
            }).then(res => {
                console.log(res.data);
            });

        } catch (error) {
        }

    }

      function handleName(e) {
        const name = e.target.value
        setNome(name)
      }

      function handleEmail(e) {
        const name = e.target.value
        setEmail(name)
      }

      function handleBirth(e) {
        const name = e.target.value
        setNascimento(name)
      }

    function handleInput(e) {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setTelefone(formattedPhoneNumber)
        return 
    }

    function handleSubmit(e) {
        setNome('')
        setEmail('')
        setTelefone('')
        setNascimento('')
        e.preventDefault()
    }
    function formatPhoneNumber(value) {
        if(!value) {
            return value
        }
        const phoneNumber = value.replace(/[^\d]/g,"")
        const phoneNumberLength = phoneNumber.length
        if(phoneNumberLength < 3) {
            return phoneNumber;
        } if(phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2)}`
        }
        if(phoneNumberLength === 11)
       { return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2, 3)} ${phoneNumber.slice(3,7)}-${phoneNumber.slice(7, 11)}`}
    }


    return (
    <>
    <div id="cadastro" className="blue-section">
        <h2 className="page-title">CADASTRO</h2>
        <form onSubmit={handleSubmit} action="/" method="post">
            <div className="input-data">
                <label for="nome">Nome</label>
                <input value={nome} onChange={handleName} type="text" name="nome" placeholder="Fulano Beltrano de Oliveira Silva"></input>
            </div>
            <div className="input-data">
                <label for="email">E-mail</label>
                <input onChange={handleEmail} value={email}  type="email" name="email" placeholder="fulanobos@gmail.com"></input>
            </div>
            <div className="input-data">
                <label for="nascimento">Nascimento</label>
                <input onChange={handleBirth} value={nascimento}  type="text" name="nascimento" placeholder="13/10/1995"></input>
            </div>
            <div className="input-data">
                <label for="telefone">Telefone</label>
                <input onChange={handleInput} value={telefone} type="tel" name="telefone" placeholder="(31) 9 9666-1111"></input>
            </div>
            <button onClick={postData} className="btn" type="submit" name="button">CADASTRAR</button>
        </form>
    </div>
    </>
    )
}

export default Cadastro