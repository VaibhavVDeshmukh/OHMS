package com.hospital.services;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hospital.daos.LoginDao;
import com.hospital.daos.PatientDao;
import com.hospital.pojo.Doctor;
import com.hospital.pojo.Login;

@Transactional
@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private LoginDao logDao;

	@Autowired
	private PatientDao pDao;

	@Override
	public Login authenticate(String email, String password) {
		Login user = logDao.findByEmail(email);
		String hashedPassword = user.getPassword();
		boolean check = BCrypt.checkpw(password, hashedPassword);
		if(check)
			return user;
		return null;
	}

	@Override
	public Login findByEmail(String email) {
		return logDao.findByEmail(email);
	}

	@Override
	public Login findByRole(String role) {
		return logDao.findByRole(role);
	}

	@Override
	public String addPatientDetails(Login login) {
		PasswordEncoder pEncoder = new BCryptPasswordEncoder();
		String encodedPassword = pEncoder.encode(login.getPassword());
		login.setPassword(encodedPassword);
		pDao.save(login.getPatient());
		logDao.save(login);
		return "SignUp successfull";
	}

	@Override
	public Login resetPassword(String email, String dob, String password, String role) {
		Login user = logDao.findByEmail(email);

		if (user != null) {

			Date date;

			if (role.equals("patient")) {
				date = user.getPatient().getPdob();
			} else if (role.equals("doctor")) {
				date = user.getDoctor().getStaff().getSdob();
			} else {
				date = user.getStaff().getSdob();
			}

			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			String strDate = dateFormat.format(date);

			if (dob.equals(strDate)) {
				PasswordEncoder pEncoder = new BCryptPasswordEncoder();
				String encodedPassword = pEncoder.encode(password);
				user.setPassword(encodedPassword);
				logDao.save(user);
				return user;
			}
		}
		return null;
	}

	@Override
	public Doctor findDoctorByEmail(String email) {
		Login login = logDao.findByEmail(email);
		Doctor doctor = login.getDoctor();
		return doctor;
	}
}
