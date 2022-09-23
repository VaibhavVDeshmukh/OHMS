import { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from 'react-router-dom';
import HomePage from './../Homepage/HomePage';
import PatientLogin from './PatientLogin';
import addAppointment from './addAppoitment';
import ViewAppointment from './ViewAppointment';
import { Redirect } from "react-router-dom";

import EditProfile from './EditProfile';
import registration from './../Images/registration-icon.png'
import doctorcall from './../Images/healthcare-call-center-icon.png'
import rescompleted from './../Images/booking-confirmed-icon.png'

class PatientHomePage extends Component{
    constructor(props){
        super(props);
      const pid = sessionStorage.getItem("pid")
      console.log(pid)

        let loggedIn = true
        if(pid == null){
            loggedIn = false
        }

        this.state = {
            loggedIn,
            pid:pid,
        }
        this.clickAddAppointment = this.clickAddAppointment.bind(this);
        this.ViewAppointment = this.ViewAppointment.bind(this);
    }
    clickAddAppointment(pid) {
        this.props.history.push(`/addAppointments/${pid}`);
     }
  ViewAppointment(pid) {
    this.props.history.push(`/ViewAppointment/${pid}`);
    }
     render(){
        if (this.state.loggedIn === false){
            return <Redirect to="/HomePage" />
        }
       
        return(
               <>
               <div className="PWall ">
               <div className="view-margin">
               <Header/><br/>
               <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div><br/>
                <table className="T1">
                    <tr>
                        <td>   
                            <div >
                                <tr>
                                    <img height="150px" src={doctorcall} alt="" />
                                </tr><br/>
                                <tr>
                                <div className="centered"><button onClick={() => this.clickAddAppointment(this.state.pid)} className="btn btn-primary ">Add Appointment</button></div>
                                </tr>
                            </div>
                            
                        </td>
                        <td>
                            <tr>
                                <img height="150px"  src={rescompleted} alt="" />
                            </tr><br/>
                            <tr>
                            <div ><button onClick={() => this.ViewAppointment(this.state.pid)} className="btn btn-primary ">View Appointment</button></div>
                            </tr>
                        </td>
                        <td>    
                            <tr>
                                <img clasName="rimg" height="150px" src={registration} alt="" />
                            </tr><br/>
                            <tr>
                            <div><Link to="/EditProfile" className="btn btn-primary pbtn">Edit Profile</Link></div>
                            </tr>
                        </td>
                    </tr>
                </table>
                </div>
               <Footer/>
               
               </div>
               </>
        )
    }
}
export default PatientHomePage;
 
               