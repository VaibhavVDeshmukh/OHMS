import React, { Component } from "react";
import Header from "./../Header";
import { Link, Redirect } from "react-router-dom";
import Footer from "./../Footer";
import DoctorService from "../../Services/DoctorService";

class DoctorsPanel extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      staff: [],
      
    };
  }

  componentDidMount() {
    DoctorService.ViewDoctors().then((res) => {
      this.setState({ staff: res.data });
    });
  }

  render() {
    
    return (
      <>
        <div className="inWall ">
          <div className="view-table-margin">
            <Header />
            <br />
            <div>
              <td>
                <div>
                  <Link
                    to="/AdminHomePage"
                    className="btn btn-primary me-md-2 backbtn "
                  >
                    Back
                  </Link>
                </div>
                <br />
              </td>
              <td>
                
              </td>
            </div>
            <div>
              <h3 className="text-center title Adiv">
                <b>Panel of Doctors</b>
              </h3>
            </div>
            <div className="container">
              <table className="table table-success table-striped text-center table-hover tablemrgn">
                <thead>
                  <tr className="table-dark">
                  
                    <th scope="col">Name</th>
                    <th scope="col">Education</th>
                    <th scope="col">Speciality</th>
                    <th scope="col">OPD Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.staff
                    .filter((staff) => staff.doctor != null)
                    .map((staff) => (
                      <tr> 
                        <td>{staff.sname}</td>
                        <td>{staff?.doctor?.deducation}</td>
                        <td>{staff?.doctor?.dspeciality}</td>
                        <td>9:00 AM - 6:00 PM</td>
                       
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default DoctorsPanel;
