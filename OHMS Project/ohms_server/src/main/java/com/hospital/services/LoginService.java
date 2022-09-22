package com.hospital.services;

import com.hospital.pojo.Doctor;
import com.hospital.pojo.Login;

public interface LoginService {

	Login authenticate(String email, String password);

	Login findByEmail(String email);
	
	Login findByRole(String role);

	String addPatientDetails(Login loginBody);

	Login resetPassword(String email, String dob, String password, String role);

	Doctor findDoctorByEmail(String email);

}
