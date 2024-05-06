import axios from "axios";
const API_URL_BACK = "http://localhost:3333/"

const apiGet = async (endpoint="") =>{
    try{
        const response =  await axios.get(API_URL_BACK+endpoint)
        return response.data
    }catch(error){
        console.error(error)
    }
}

const apiGetBanks = async (aimCountry) =>{
    try{
        console.log(aimCountry)
        const response = await axios.get(API_URL_BACK+"getBanks/"+aimCountry)
        return response.data
    }catch(error){
        console.error(error)
    }
}

export { apiGet,apiGetBanks }