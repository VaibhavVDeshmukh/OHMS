import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import Header from './../Header';
import Footer from './../Footer';

import DoctorService from '../../Services/DoctorService';

 class DoctorHomePage extends Component {
      constructor(props){        
            super(props);
            const did = sessionStorage.getItem("did")
           
            let loggedIn = true
            if(did == null){
                loggedIn = false
            }
            this.state={
           patients:[],
           did:did,
        loggedIn
                }

                this.viewPatientDetails = this.viewPatientDetails.bind(this);
        }
        componentDidMount() {
         
            DoctorService.getPatientByDoctorId(this.state.did).then((res) => {
                console.log(res.data);
                
                  this.setState({ patients: res.data })

            });
           
      }
                      viewPatientDetails=(pname)=>{

                        window.location=`/patientProfile/${pname}`
                      }


      render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/HomePage" />
        }
            return (
            <>
            <div className=" inWall">
            <div className="view-table-margin">
            <Header/><br />
                <div >
                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                </div><br/>
                <div>
                    <h3 className="text-center Adiv title"><b>View Appointments</b></h3>
                </div>
                <div>
                <div className="container">
                        <table  className="table table-success table-striped text-center table-hover ">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">PATIENT ID</th>
                                    <th scope="col">PATIENT NAME</th>
                                    <th scope="col">PATIENT PROFILE</th>
                                </tr>
                            </thead>
                            <tbody >
                            {this.state.patients.map((patients) => (
                                <tr >
                                    
                                    <td>{patients.pid}</td>
                                    <td>{patients.pname}</td>
                                    
                                    <td> <button type="button" className="btn btn-info btn-sm" 
                                    onClick={() => this.viewPatientDetails(patients?.pname)}
                                    
                                    >View</button></td>
                                    
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                
            <Footer/>  
            </div>    
            </>
            )
      }
}
export default DoctorHomePage;
