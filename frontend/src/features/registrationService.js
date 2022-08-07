import axios from "axios"

const API_URL = "/"

const createRegistration = async (data) => {
  
    const response = await axios.post(API_URL, data)

    return response.data
}

const getRegistration = async () => {
    

    const response = await axios.get(API_URL)

    return response.data
}


const registrationService = {
    createRegistration,
    getRegistration,
}

export default registrationService