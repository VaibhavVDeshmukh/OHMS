package com.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.pojo.Login;
import com.hospital.pojo.Patient;

@Repository
public interface PatientDao extends JpaRepository<Patient, Integer>{

	void save(Login loginAfter);

	Patient findByPname(String name);

}
