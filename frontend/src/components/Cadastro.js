import React, { useEffect, useState } from "react"
import axios from 'axios'

function Cadastro() {

    const [inputValue, setInputVale] = useState('');
    const [registrationData, setRegistrationData] = useState([]);
    const [registration, setRegistration] = useState({
        name: '',
        email:'',
        birth: '',
        tel: '',
      });

    function addData(newData) {
        setRegistrationData(prevData => {
        return [...prevData, newData];
      });
    }

    
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setRegistration(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
    
      function submitRegistration(e) {
        addData(registration);
        setRegistration({
            name: '',
            email:'',
            birth: '',
            tel: '',
        });
        e.preventDefault();
      }
   

    function handleInput(e) {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setInputVale(formattedPhoneNumber)
        return 
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
        <form action="/" method="post">
            <div className="input-data">
                <label for="nome">Nome</label>
                <input type="text" name="nome" placeholder="Fulano Beltrano de Oliveira Silva"></input>
            </div>
            <div className="input-data">
                <label for="email">E-mail</label>
                <input type="email" name="email" placeholder="fulanobos@gmail.com"></input>
            </div>
            <div className="input-data">
                <label for="nascimento">Nascimento</label>
                <input type="text" name="nascimento" placeholder="13/10/1995"></input>
            </div>
            <div className="input-data">
                <label for="telefone">Telefone</label>
                <input onChange={handleInput} value={inputValue} type="tel" name="telefone" placeholder="(31) 9 9666-1111"></input>
            </div>
            <button className="btn" type="submit" name="button">CADASTRAR</button>
        </form>
    </div>
    </>
    )
}

export default Cadastro