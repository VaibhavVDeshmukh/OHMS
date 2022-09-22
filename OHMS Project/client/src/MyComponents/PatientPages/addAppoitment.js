
import { Component } from "react";
import Footer from '../Footer';
import Header from '../Header';
import { Link } from 'react-router-dom';
import DoctorService from "../../Services/DoctorService";
import ReceptionistService from "../../Services/ReceptionistService";
import { Redirect } from 'react-router-dom';


class addPatientAppointment extends Component {
    constructor(props) {
        super(props);
        const pid = sessionStorage.getItem("pid")
        console.log(pid)

        let loggedIn = true
        if (pid == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn,
            pid: pid,
            staff: [],
            adate: "",
            atimeslot: "",
            asymptoms: "",
            did: ""
        };

        this.changeAdateHandler = this.changeAdateHandler.bind(this);
        this.changeAtimeslotHandler = this.changeAtimeslotHandler.bind(this);
        this.changeAsymptomsHandler = this.changeAsymptomsHandler.bind(this);
        this.changeDoctorSelectorHandler = this.changeDoctorSelectorHandler.bind(this);
        this.submitAppointmentDetails = this.submitAppointmentDetails.bind(this);



    }

    changeAdateHandler = (event) => {
        this.setState({ adate: event.target.value });
    }
    changeAtimeslotHandler = (event) => {
        this.setState({ atimeslot: event.target.value });
    };

    changeAsymptomsHandler = (event) => {
        this.setState({ asymptoms: event.target.value });
    };
    changeDoctorSelectorHandler = (event) => {
        this.setState({ did: event.target.value });
    };


    componentDidMount() {
        DoctorService.ViewDoctors().then((res) => {

            this.setState({ staff: res.data })

        });
    }
    submitAppointmentDetails = (e) => {
        e.preventDefault();
        let appointmentDetails = {

            adate: this.state.adate,
            atimeslot: this.state.atimeslot,
            asymptoms: this.state.asymptoms,



        };
        console.log('appointmentDetails =>' + JSON.stringify(appointmentDetails));
        ReceptionistService.registerAppointment(appointmentDetails, this.state.pid, this.state.did).then((res) => {
            alert("Appointment Booked")
            window.location = "/PatientHomePage";
        })




    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }
        return (
            <>

                <div className="inWall headmargin">
                <nav className="navbar navbar-expand-lg navbar-light header">
                    <div>
                    <a href="/HomePage"><img className="imgheight" src="http://localhost:3000/images/nLogo.jpg" /></a>
                    </div>
                    <div className="collapse navbar-collapse ">
                    <ul className="navbar-nav mr-auto">̥
                        <li className="nav-item">
                        <a className="nav-link" href="HomePage"><b>Home</b></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="AboutUs"><b>About Us</b></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="Disclaimer"><b>Facilities</b></a>
                        </li>
                    </ul>
                    </div>
                </nav><br />
                    
                    <div>
                        <td>
                            <div><Link to="/PatientHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                        </td>
                        <td>
                            <div><Link to="/PatientLogin" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                        </td>
                    </div>
                    <div className="Center">
                        <div className="Centerinside Sgradient">
                            <h3 className="PlaceLogin title"><br /><b>Enter Details</b></h3><br /><br />
                            <form className="form">
                                <div>
                                    <label for="#" className="intitle"><b>Appt Date- </b></label>
                                    <input className="Rgenderdiv date Circular" type="date" id="#" name="#"
                                        value={this.state.adate}
                                        onChange={this.changeAdateHandler} />
                                </div><br />

                                <div>
                                    <td>
                                        <label for="#" className="intitle"><b>TimeSlot- </b></label>
                                    </td>
                                    <td>
                                        <div >
                                            <select className="timemrg Circular" defaultValue={this.state.atimeslot}
                                                onChange={this.changeAtimeslotHandler}
                                            ><option >Select TimeSlot</option>
                                                <option value="morning">Morning</option>
                                                <option value="afternoon">Afternoon</option>
                                                <option value="evening">Evening</option>
                                            </select>
                                        </div>
                                    </td><br />
                                </div>
                                <div>
                                    <td><label for="#" className="intitle"><b>Symptoms- </b></label></td>
                                    <td className="aasymp Circular"><input className="Circular PlaceContent" type="text" placeholder="Enter Symptoms"
                                        value={this.state.asymptoms}
                                        onChange={this.changeAsymptomsHandler} /></td>
                                </div><br />
                                <div >
                                    <td><label for="#" className="intitle"><b> Doctor-</b></label></td>
                                    <td>
                                        <select className="docmrg Circular" defaultValue={this.state.did}
                                            onChange={this.changeDoctorSelectorHandler} > <option >Select Doctor</option>
                                            {this.state.staff.filter((staff) => staff.doctor != null).map((staff) => (
                                                <option value={staff?.doctor?.did}>{staff.sname}</option>
                                            ))}
                                        </select>

                                    </td>
                                </div>
                                <br /><br /><br />

                                <div className="PlaceSubmit">
                                    <input className="Circular PlaceBtn btn btn-primary me-md-2" type="submit" value="Submit"
                                        onClick={this.submitAppointmentDetails} />
                                </div> <br /><br />
                            </form>
                        </div>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>

                <Footer />

            </>
        )
    }
}
export default addPatientAppointment;