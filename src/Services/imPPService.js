import axios from "axios";
import {API} from "./config";

class imPPService{

    listDayUsers(){
        return axios.get(API + "/im-day");
    }

}
export default new imPPService();