import axios from "axios";

export default class WorkplaceTypeService{
    getWorkplaceTypes(){
        return axios.get("http://localhost:8080/api/workplacetypes/getAll");
    }
}