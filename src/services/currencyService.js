import axios from "axios";

export default class CurrencyService{
    getAll(){
        return axios.get("http://localhost:8080/api/currencies/getall")
    }

}