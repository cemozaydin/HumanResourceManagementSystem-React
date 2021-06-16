import axios from "axios";

export default class JobPostingService{
    getJobPosting(){
        return axios.get("http://localhost:8080/api/jobPostings/getJobPostingDetailsOrderByPostingReleaseDate")
    }
}