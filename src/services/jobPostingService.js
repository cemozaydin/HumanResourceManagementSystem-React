import axios from "axios";

export default class JobPostingService{
    getAllJobPosting(){
        return axios.get("http://localhost:8080/api/jobPostings/getAllByIsActiveAndAdminApproved")
    }

    getJobPostingDetailsById(id){
     return axios.get("http://localhost:8080/api/jobPostings/getJobPostingById?id="+ id)
    }

   addJobPostings(values){
       return axios.post("http://localhost:8080/api/jobPostings/add",values)
   }


}