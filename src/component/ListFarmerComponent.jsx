import React, { Component } from 'react';
import farmerService from '../services/farmerService';


class ListFarmerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            farmers: []
        }
        this.addFarmer=this.addFarmer.bind(this);
        this.editFarmer=this.editFarmer.bind(this);
        this.deleteFarmer=this.deleteFarmer.bind(this);

    }
    deleteFarmer(farmerId){
        farmerService.deleteFarmer(farmerId).then(res=>{
            this.setState({farmers: this.state.farmers.filter(farmer => farmer.farmerId !== farmerId)});
        });

    }

    editFarmer(farmerId){
        this.props.history.push(`/update-farmer/${farmerId}`);
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
                <div>
                    <button style={{marginBottom: "20px"}} className=" btn btn-primary" onClick={this.addFarmer} > Add Farmer</button>
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
                                        <tr key={farmer.farmerId}>
                                            <td> {farmer.farmerName} </td>
                                            <td> {farmer.farmerMobileNo} </td>
                                            <td> {farmer.aadharNo} </td>
                                            <td> {farmer.city} </td>
                                            <td> {farmer.state} </td>
                                            <td> {farmer.zipcode} </td>
                                            <td>
                                                <button onClick={ () => this.editFarmer(farmer.farmerId)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft: "20px"}} onClick={ () => this.deleteFarmer(farmer.farmerId)} className="btn btn-danger">delete</button>
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