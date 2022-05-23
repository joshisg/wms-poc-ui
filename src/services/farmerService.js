import axios from 'axios';

const FARMER_API_GET_FARMER_URL = "http://localhost:8080/wms/farmers"
const FARMER_API_POST_FARMER_URL ="http://localhost:8080/wms/farmer"

class FarmerService{

    getFarmers(){
        return axios.get(FARMER_API_GET_FARMER_URL);
    }

    createFarmer(farmer){
        return axios.post(FARMER_API_POST_FARMER_URL,farmer);
    }
}

export default new FarmerService();