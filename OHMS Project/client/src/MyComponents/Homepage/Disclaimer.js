import { Component } from "react";

import Footer from "../Footer";
import Header from "../Header";

import Mycard from "./Mycard";
import image1 from './../Images/opd1.jpg';
import image2 from './../Images/emergency1.jpeg';
import image3 from './../Images/ipd1.jpg';
import image4 from './../Images/sergical.jpeg';
import image5 from './../Images/pharmacy.jpeg';
import image6 from './../Images/radiology.jpeg';
import image7 from './../Images/lab.jpeg';
import image8 from './../Images/remo.jpeg';
class Disclaimer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Header />
                
                <div className="DisWall headmargin">
                
                    <div>
                        <div><br />
                            <div>
                                <section><h3 className="heading"><b>OUR SERVICES</b><hr className="newhr" /></h3></section>
                            </div>
                        </div>
                    </div>
                    
                    <table>
                        <tr className="tr1">
                            
                            <td className="td1"><Mycard cimage={image1} ctitle='OPD SERVICES' cdescription='Out Patient Department (OPD) Services at Medicare Hospital runs daily from Sundays to Thursdays (Full time) ' /></td>
                            <td className="td1"><Mycard cimage={image2} ctitle='EMERGENCY AND CASUALITY' cdescription='The Department of Emergency is the face of the hospital and also one of its main pillars .It provides round the clock services which include any acute illness and cases which the patients and their relatives consider them to be attended immediately. '/></td>
                            <td className="td1"><Mycard cimage={image3}  ctitle='IPDS' cdescription='As an in-patient of the Indian Spinal Injuries Centre, you have the right to receive considerate, respectful and compassionate care in a safe setting. You also have the right to ask your attending doctor to explain your diagnosis and the line of treatment. '/></td>
                            <td className="td1"><Mycard cimage={image4} ctitle='SURGICAL INTERVENTIONS' cdescription='The cancer surgeon is a key member of a multidisciplinary cancer care team. The surgeon is frequently the “entry point” for patients who are suspected of having cancer or are newly diagnosed with cancer'/></td>
                           
                      </tr>
                        <tr className="tr1">
                            
                            <td className="td1"><Mycard cimage={image5} ctitle='PHARMACY' cdescription='The department of the hospital which deals with procurement, storage, compounding, dispensing, manufacturing, testing, packaging, and distribution of drugs. The practice of pharmacy within the hospital under the supervision of a professional pharmacist is known as hospital pharmacy.'/></td>
                            <td className="td1"><Mycard cimage={image6} ctitle='RADIOLOGY (24X7)' cdescription='An efficient, high-quality, well-run radiology department increases patient satisfaction as a result of its ability to improve patient care. Over time, a well-run radiology department adds significant patient volumes to the hospital, which, of course, favorably enhances the hospital’s bottom line.'/></td>
                            <td className="td1"><Mycard cimage={image7} ctitle='LABORATORY SERVICES' cdescription='The clinical laboratory in a hospital runs tests on patients that pertain to the diagnosis, prevention and treatment of diseases. Although the laboratory is within the hospital, it generally does other testing aside from tests conducted for the hospital.'/></td>
                            <td className="td1"><Mycard cimage={image8} ctitle='REMOTE HEALTH CARE SERVICES' cdescription='Remote patient monitoring (RPM) is a healthcare delivery method that uses technology to monitor patient health outside of a traditional clinical setting. RPM refers to the specific technology used to electronically transmit information between patients and physicians, and it is just one delivery system within the broader telemedicine industry.'/></td>
                           
                        </tr>
                    
                    </table>

                    
                    <div>
                       
                       
                        <div className="bgradient">
                            <div>
                                <div>
                                    <section><hr className="newhr" /><h3 className="heading">OUR FACILITY<hr className="newhr" /></h3></section>
                                </div>
                            </div>
                            <div className="flex-2">
                                <div className="facility-div-size">
                                    <img src="images/FacilityLogo.png" alt="" />
                                </div>
                                <div>
                                    <ul>
                                        <li><h3>Built up in 7500 sq ft area.</h3> </li>
                                        <li><h3>100+ Bedded Hospital</h3> </li>
                                        <li><h3>12+ Bedded advanced ICU</h3> </li>
                                        <li><h3>3 Operations Theatres</h3> </li>
                                        <li><h3>Fully Automated Lab Equipments</h3> </li>
                                        <li><h3>24 X 7 Power Back up</h3> </li>
                                        <li><h3>STP, ETP, RO System</h3> </li>
                                    </ul>
                                </div>
                            </div><br /><br /><br />
                        </div>
                    </div>
                    <br/><br/><br/>
                    
                </div>
                <Footer />
            </>

        )
    }
}
export default Disclaimer;