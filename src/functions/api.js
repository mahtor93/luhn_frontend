import axios from "axios";
const API_URL_BACK = "http://localhost:3333/"

const apiGet = async (endpoint="") =>{
    try{
        const response =  await axios.get(API_URL_BACK+endpoint)
        return response.data
    }catch(error){
        console.error("API error:",error)
    }
}

const apiGetJson = async (endpoint="", number) => {
    try{
        const response = await axios.get(API_URL_BACK+endpoint,number)
        return response
    }catch(error){
        console.error("API error:",error)
    }
}

export { apiGet,apiGetJson }