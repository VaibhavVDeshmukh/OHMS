package com.hospital.services;

import java.util.List;

import com.hospital.pojo.Doctor;
import com.hospital.pojo.Staff;

public interface DoctorService {

	List<Doctor> findAll();

	Doctor findById(int id);

	Staff findByAid(int aid);

}
