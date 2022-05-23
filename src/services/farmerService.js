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

    getFarmerByFarmerId(farmerId){
        return axios.get(FARMER_API_POST_FARMER_URL + '/' + farmerId);
    }

    updateFarmer(farmer,farmerId){
        return axios.put(FARMER_API_POST_FARMER_URL + '/' + farmerId,farmer);
    }

    deleteFarmer(farmerId){
        return axios.delete(FARMER_API_POST_FARMER_URL + '/' + farmerId);
    }
}

export default new FarmerService();