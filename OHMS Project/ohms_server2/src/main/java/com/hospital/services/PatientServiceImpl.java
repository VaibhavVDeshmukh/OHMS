package com.hospital.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hospital.daos.PatientDao;
import com.hospital.pojo.Patient;

@Transactional
@Service
public class PatientServiceImpl implements PatientService{
	
	@Autowired
	private PatientDao pDao;

	@Override
	public List<Patient> findAll() {
		return pDao.findAll();
	}

	@Override
	public Patient findByPname(String name) {
		return pDao.findByPname(name);
	}
	
	@Override
	public Patient findById(int id) {
		Optional<Patient> patient = pDao.findById(id);
		return patient.orElse(null);
	}

	@Override
	public Patient update(Patient patient) {
		return pDao.save(patient);
	}

	@Override
	public List<Patient> findAllPatientByDoctor(int did) {
		
		return pDao.findDistinctPatientByDoctorId(did);
	}
}
