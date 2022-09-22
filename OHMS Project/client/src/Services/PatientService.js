import React, { Component } from 'react'
import axios from 'axios';
const OHMS_URL="http://localhost:8080"
 class PatientService extends Component {
    registerPatient(patientDetails){
          return axios.post(OHMS_URL +"/patient/register",patientDetails)
    } 
    
    viewAllPatient() {
      return axios.get(OHMS_URL+"/patient");
    }

    getPatientByDoctorId(did){
      return axios.get(OHMS_URL+ "/appointment/doctor/"+ did);
    }

    getPatientWhoHaveAppointment(){
      return axios.get(OHMS_URL+ "/appointment");
    }

    deleteAppointment(aid){
      return axios.delete(OHMS_URL+ "/appointment/delete/"+aid);
    }

    makeInvoice(aid,invoiceDetails) {
      return axios.post(OHMS_URL+"/invoice/add/" + aid,invoiceDetails);
    }

    showinvoice(aid){
      return axios.get(OHMS_URL+"/invoice/" + aid);
    }

    showAppointmentByPid(pid){
      return axios.get(OHMS_URL+"/appointment/patient/" + pid);
    }
editPatient(pid,patientDetails){
  return axios.put(OHMS_URL+"/patient/"+pid, patientDetails);
}
showPatientByPid(pid){
  return axios.get(OHMS_URL+"/patient/" + pid);
}
showPatientByPname(pname){
  return axios.get(OHMS_URL+"/patient/name/"+pname);
} 


}export default new PatientService()
