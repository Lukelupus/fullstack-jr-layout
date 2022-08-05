import asyncHandler from "express-async-handler"
import Registration from "../models/registrationModel.js"


const getRegistration = asyncHandler(async (req, res) => {
    const registerUsers = await Registration.find()

    res.status(200).json(
        registerUsers
    )
  
})

export default getRegistration