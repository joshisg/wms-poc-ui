
import React, { Component } from 'react';

class CreateFarmerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            mobileNumber: '',
            aadharNumber: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changeAadharNumberHandler = this.changeAadharNumberHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeZipcodeHandler = this.changeZipcodeHandler.bind(this);
       this.saveFarmer = this.saveFarmer.bind(this);
          
    }
    saveFarmer = (e) => {
        e.preventDefault();
        let farmer = { fullName: this.state.fullName, mobileNumber: this.state.mobileNumber, aadharNumber: this.state.aadharNumber, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode }
        console.log('farmer =>' + JSON.stringify(farmer));
    }

    changeFullNameHandler = (event) => {
        this.setState({ fullName: event.target.value });
    }
    changeMobileNumberHandler = (event) => {
        this.setState({ mobileNumber: event.target.value });
    }
    changeAadharNumberHandler = (event) => {
        this.setState({ aadharNumber: event.target.value });
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
    cance(){
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
                                        <input placeholder="Full Name" name="fullName" className="form-control" value={this.state.fullName} onChange={this.changeFullNameHandler} />

                                    </div>
                                    <div className="form-group">

                                        <label> Mobile Number:</label>
                                        <input placeholder="Mobile Number" name="mobileNumber" className="form-control"
                                            value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler} />

                                    </div>
                                    <div className="form-group">

                                        <label> Aadhar Number:</label>
                                        <input placeholder="Aadhar Number:" name="aadharNumber" className="form-control"
                                            value={this.state.aadharNumber} onChange={this.changeAadharNumberHandler} />

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
                                    <button className="btn btn-success" onClick={this.saveFarmer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}> Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateFarmerComponent;