import asyncHandler from "express-async-handler"

const postRegistration = asyncHandler(async (req, res) => {
    const { nome, email, nascimento, telefone } =  req.body
    const register = []
    if(!nome || !email || !nascimento || !telefone) {
        res.status(400)
        throw new Error("Por favor preencha todos os campos.")
    }
    else {
        const newRegister = {
            nome: nome,
            email: email,
            nascimento: nascimento,
            telefone: telefone
        }
        register.push(newRegister)
        res.status(201).json(register)
    }
})

export default postRegistration
