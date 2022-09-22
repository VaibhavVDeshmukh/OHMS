import { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';
import { Link, Redirect } from 'react-router-dom';
import doctorteam from './../Images/doctor-team-icon.png' 
import injury from './../Images/injury-icon.png' 
import feversymptoms from './../Images/fever-symptom-icon.png'
import bookingcancel from './../Images/booking-cancel-icon.png'

class RecepHomePage extends Component {
    constructor(props) {
        super(props);
        const email = sessionStorage.getItem("email")
        console.log(email)

        let loggedIn = true
        if (email == null) {
            loggedIn = false
        }

        this.state = {
            loggedIn,
            email: email,
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }
        return (
            <>
                <div className="PWall">
                    <div className="view-margin">
                        <Header /><br />
                        <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div><br />
                        <table className="T1">
                            <tr>
                                <td>
                                    <div >
                                        <tr>
                                            <img className="rimg" height="150px" src={feversymptoms} alt="" />
                                        </tr><br />
                                        <tr>
                                            <div className="centered"><Link to="/AddPatient" className="btn btn-primary rbtn">Add Patient</Link></div>
                                        </tr>
                                    </div>
                                </td>
                                <td>
                                    <tr>
                                        <img className="rimg" height="150px" src={injury} alt="" />
                                    </tr><br />
                                    <tr>
                                        <div ><Link to="/ViewAllPatient" className="btn btn-primary rbtn">View All Patients / Add appoinment</Link></div>
                                    </tr>
                                </td>
                                <td>
                                    <tr className="text-center">
                                        <img className="rimg" height="150px" src={bookingcancel} alt="" />
                                    </tr><br />
                                    <tr >
                                        <div className="text-center"><Link to="/ViewAptbyRecp" className="btn btn-primary rbtn">View Appoinment / Delete</Link></div>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <img height="140px" src={doctorteam} alt="" />
                                    </tr><br />
                                    <tr>
                                        <div><Link to="DrAppointments" className="btn btn-primary rbtn">All Doctors Appointment Details</Link></div>
                                    </tr>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}
export default RecepHomePage;
