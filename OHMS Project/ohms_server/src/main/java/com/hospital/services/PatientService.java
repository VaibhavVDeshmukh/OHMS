package com.hospital.services;

import java.util.List;

import com.hospital.pojo.Patient;

public interface PatientService {

	List<Patient> findAll();

	Patient findByPname(String name);

	Patient findById(int id);

	Patient update(Patient patient);

}
