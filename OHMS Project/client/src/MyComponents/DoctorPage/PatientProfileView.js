import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PatientService from "../../Services/PatientService";
import Header from "../Header";
import Footer from '../Footer';
import PatientProfilePic from '../Images/PatientProfilePic.png'
import Appointment from '../ReceptionistPages/Appointment';
import hlogo from "./../Images/hlogo2.png"

class PatientProfileView extends Component {

    constructor(props) {
        super(props);

        const did = sessionStorage.getItem("did")

        let loggedIn = true
        if (did == null) {
            loggedIn = false
        }

        this.state = {
            pname:"",
            pid:"",
            pgender:"",
            pdob:"",
            pphone:"",
            paddress:"",
            did: did,
            loggedIn,
            pname: this.props.match.params.pname
        }

    }

    componentDidMount() {
        PatientService.showPatientByPname(this.state.pname).then((res) => {
           
            this.setState({ pname: res.data.pname })
            this.setState({ pid: res.data.pid })
            this.setState({ pgender: res.data.pgender })
            this.setState({ pdob: res.data.pdob })
            this.setState({ pphone: res.data.pphone })
            this.setState({ paddress: res.data.paddress })
           console.log(res.data)
           console.log(res.data.pname)
        });
    }
    viewPatientAppointments=(pid)=>{

        window.location=`/patientAppointments/${pid}`
      }

    
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }
        return (
            <>
                <div className="inWall">
                    <div className="view-table-margin">
                    <nav className="navbar navbar-expand-lg navbar-light header">
                    <div>
                    <a href="/HomePage"><img className="imgheight" src={hlogo} /></a>
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
                                <div><Link to="/doctorHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                            </td>
                            <td>
                                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                            </td>
                        </div>
                        <div>
                            <h3 className="text-center title Adiv"><b>Patient Profile</b></h3>
                        </div>
                       <div className="container emp-profile">
                           <form method="">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={PatientProfilePic} ></img>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="profile-head">
                                            <h3> {this.state.pid}</h3>
                                            <h3> {this.state.pname}</h3>
                                            <h3> {this.state.pgender}</h3>
                                            <h3> {this.state.pdob}</h3>
                                            <h3> {this.state.paddress}</h3>
                                            <h3> {this.state.pphone}</h3>
                                            <button type="button" className="btn btn-success btn-sm" 
                                    onClick={() => this.viewPatientAppointments(this.state.pid)}
                                    
                                    >Appoinments History</button>
                                        </div>
                                    </div>
                                </div>
                           </form>

                       </div>
                       
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default PatientProfileView;




