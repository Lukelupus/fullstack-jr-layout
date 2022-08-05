import asyncHandler from "express-async-handler"
import postRegistration from "./postRegistration.js"

const getRegistration = asyncHandler(async (req, res) => {
    const { nome, email, nascimento, telefone } =  req.body 

    const registration = {
        nome: nome,
        email: email,
        nascimento: nascimento,
        telefone: telefone
    }
    
    if(!nome || !email || !nascimento || !telefone) {
        res.status(200).json({Message: "Não há registros"})
    }
    else {
        res.status(201).json(registration)
    }
})

export default getRegistration