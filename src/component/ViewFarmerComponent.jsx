import React, { Component } from 'react';
import farmerService from '../services/farmerService';

class ViewFarmerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            farmerId: this.props.match.params.farmerId,
            farmer: {}
       }         
    }
    cancel(){
        this.props.history.push('/farmers');
    }
    componentDidMount(){
        farmerService.getFarmerByFarmerId(this.state.farmerId).then(res => {
                this.setState({farmer: res.data})
        });
    }


    render() {
        return (
            <div>
               <div className="card col-md-6 offset-md-3">
                   <h3 className="text-center"> View Farmer Details</h3>
                   <div className="card-body">
                            <div className="row">
                                <label>Farmer Name: </label>
                                <div>{this.state.farmer.farmerName}</div>
                            </div>
                            <div className="row">
                                <label>Mobile Number: </label>
                                <div>{this.state.farmer.farmerMobileNo}</div>
                            </div>
                            <div className="row">
                                <label>Aadhar Number: </label>
                                <div>{this.state.farmer.aadharNo}</div>
                            </div>
                            <div className="row">
                                <label>City: </label>
                                <div>{this.state.farmer.city}</div>
                            </div>
                            <div className="row">
                                <label>State: </label>
                                <div>{this.state.farmer.state}</div>
                            </div>
                            <div className="row">
                                <label>Zipcode: </label>
                                <div>{this.state.farmer.zipcode}</div>
                            </div>
                            <div className='row'>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "20px" }}>Cancel</button>
                            </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewFarmerComponent;