import axios from "axios";

export default class EmployerService{
    getEmployer(){
        return axios.get("http://localhost:8080/employers/getall")
    }

    getEmployerById(id){
        return axios.get("http://localhost:8080/employers/getById?employerId="+id);
    }

}
