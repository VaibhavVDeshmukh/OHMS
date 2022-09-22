package com.hospital.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hospital.daos.AppointmentDao;
import com.hospital.daos.DoctorDao;
import com.hospital.pojo.Appointment;
import com.hospital.pojo.Doctor;
import com.hospital.pojo.Staff;

@Transactional
@Service
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	private DoctorDao drDao;

	@Autowired
	private AppointmentDao aDao;

	@Override
	public List<Doctor> findAll() {
		return drDao.findAll();
	}

	@Override
	public Doctor findById(int id) {
		Optional<Doctor> doctor = drDao.findById(id);
		return doctor.orElse(null);
	}

	@Override
	public Staff findByAid(int aid) {
		Optional<Appointment> appo = aDao.findById(aid);
		Appointment appointment = appo.orElse(null);

		Staff staff = appointment.getDoctor().getStaff();

		return staff;
	}

}
