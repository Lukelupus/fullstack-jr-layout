import asyncHandler from "express-async-handler"
import Registration from "../models/registrationModel.js"

const postRegistration = asyncHandler(async (req, res) => {
    const { nome, email, nascimento, telefone } =  req.body
    const register = []
    if(!nome || !email || !nascimento || !telefone) {
        res.status(400)
        throw new Error("Por favor preencha todos os campos.")
    }

    const registrationExists = await Registration.findOne({email})

    if(registrationExists) {
        res.status(400)
        throw new Error("Email já cadastrado")
    }
    
     register.push({
        name: nome,
        email: email,
        birth: nascimento,
        tel: telefone
    })

    res.status(200).json(
        register
    )
})



export default postRegistration
