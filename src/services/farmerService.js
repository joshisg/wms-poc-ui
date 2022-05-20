import axios from 'axios';

const FARMER_API_BASE_URL = "http://localhost:8080/wms/farmers"

class FarmerService{

    getFarmers(){
        return axios.get(FARMER_API_BASE_URL);
    }
}

export default new FarmerService();