import React, { Component } from 'react';
import farmerService from '../services/farmerService';

class UpdateFarmerComponenet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            farmerId: this.props.match.params.farmerId,
            farmerName: '',
            farmerMobileNo: '',
            aadharNo: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.changeFarmerNameHandler = this.changeFarmerNameHandler.bind(this);
        this.changefarmerMobileNoHandler = this.changefarmerMobileNoHandler.bind(this);
        this.changeaadharNoHandler = this.changeaadharNoHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeZipcodeHandler = this.changeZipcodeHandler.bind(this);
       this.updateFarmer = this.updateFarmer.bind(this);
          
    }
    componentDidMount(){
        farmerService.getFarmerByFarmerId(this.state.farmerId).then((res) => {
            let farmer = res.data;
            this.setState({ farmerName: farmer.state.farmerName, 
                farmerMobileNo: farmer.state.farmerMobileNo, 
                aadharNo: farmer.state.aadharNo, 
                city: farmer.state.city, 
                state: farmer.state.state, 
                zipcode: farmer.state.zipcode 
                });
        });
    }
    updateFarmer = (e) => {
        e.preventDefault();
        let farmer = { farmerName: this.state.farmerName, farmerMobileNo: this.state.farmerMobileNo, aadharNo: this.state.aadharNo, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode }
        console.log('farmer =>' + JSON.stringify(farmer));
        
    }

    changeFarmerNameHandler = (event) => {
        this.setState({ farmerName: event.target.value });
    }
    changefarmerMobileNoHandler = (event) => {
        this.setState({ farmerMobileNo: event.target.value });
    }
    changeaadharNoHandler = (event) => {
        this.setState({ aadharNo: event.target.value });
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changeStateHandler = (event) => {
        this.setState({ state: event.target.value });
    }
    changeZipcodeHandler = (event) => {
        this.setState({ zipcode: event.target.value });
    }
    cancel(){ 
        this.props.history.push('/farmers');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Farmer</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Full Name:</label>
                                        <input placeholder="Full Name" name="farmerName" className="form-control" value={this.state.farmerName} onChange={this.changeFarmerNameHandler} />

                                    </div>
                                    <div className="form-group">

                                        <label> Mobile Number:</label>
                                        <input placeholder="Mobile Number" name="farmerMobileNo" className="form-control"
                                            value={this.state.farmerMobileNo} onChange={this.changefarmerMobileNoHandler} />

                                    </div>
                                    <div className="form-group">

                                        <label> Aadhar Number:</label>
                                        <input placeholder="Aadhar Number:" name="aadharNo" className="form-control"
                                            value={this.state.aadharNo} onChange={this.changeaadharNoHandler} />

                                    </div>
                                    <div className="form-group">

                                        <label> City:</label>
                                        <input placeholder="City" name="city" className="form-control"
                                            value={this.state.city} onChange={this.changeCityHandler} />

                                    </div>
                                    <div className="form-group">

                                        <label> State:</label>
                                        <input placeholder="State" name="state" className="form-control"
                                            value={this.state.state} onChange={this.changeStateHandler} />

                                    </div>

                                    <div className="form-group">

                                        <label> Zipcode:</label>
                                        <input placeholder="Zipcode" name="zipcode" className="form-control"
                                            value={this.state.zipcode} onChange={this.changeZipcodeHandler} />

                                    </div>
                                    <button className="btn btn-success" onClick={this.updateFarmer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateFarmerComponenet;
