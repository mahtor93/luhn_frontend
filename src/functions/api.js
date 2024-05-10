import axios from "axios";
const API_URL_BACK = "https://luhn-backend.onrender.com"

const apiGet = async (endpoint="") =>{
    try{
        const response =  await axios.get(API_URL_BACK+endpoint)
        return response.data
    }catch(error){
        console.error("API error:",error)
    }
}

/*
const apiGetJson = async (endpoint="", data) => {
    try{
        return await axios.get(API_URL_BACK+endpoint,data)
    }catch(error){
        console.error("API error:",error)
    }
}
*/

const apiGetJson = async (endpoint="", data) => {
    try{
        const query = Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&')
        const url = `${API_URL_BACK}${endpoint}?${query}`
        console.log(url)
        return await axios.get(url)
    }catch(error){
        console.error("API error:",error)
    }
}


export { apiGet,apiGetJson }