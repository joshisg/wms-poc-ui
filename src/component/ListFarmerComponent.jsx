import React, { Component } from 'react';
import farmerService from '../services/farmerService';


class ListFarmerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            farmers: []
        }
        this.addFarmer=this.addFarmer.bind(this);

    }
    componentDidMount() {
        farmerService.getFarmers().then((res) => {
            this.setState({ farmers: res.data })
        });
    }
    
    addFarmer(){
          this.props.history.push('/add-farmer');
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Farmers List</h2>
                <div className="row">
                    <button className=" btn btn-primary" onClick={this.addFarmer} > Add Farmer</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Farmer Name</th>
                                <th>Mobile Number</th>
                                <th>Aadhar Number</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zipcode</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.farmers.map(
                                    farmer =>
                                        <tr key={farmer.id}>
                                            <td> {farmer.farmerName} </td>
                                            <td> {farmer.farmerMobileNo} </td>
                                            <td> {farmer.aadharNo} </td>
                                            <td> {farmer.city} </td>
                                            <td> {farmer.state} </td>
                                            <td> {farmer.zipcode} </td>
                                            <td>
                                                <button onClick={ () => this.editFarmer(farmer.farmerId)} className="btn-btn-info">Update</button>
                                            </td>
                                        </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListFarmerComponent;