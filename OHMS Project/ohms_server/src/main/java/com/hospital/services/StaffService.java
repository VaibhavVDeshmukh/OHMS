package com.hospital.services;

import java.util.List;

import com.hospital.pojo.Login;
import com.hospital.pojo.Staff;

public interface StaffService {

	Staff findById(int id);

	String addDoctor(Login doctorDetails);

	String addStaff(Login staffDetails);

	List<Staff> findAll();

	void deleteStaff(int id);

	Staff updateStaff(Staff staff);

}
