package com.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.pojo.Doctor;

@Repository
public interface DoctorDao extends JpaRepository<Doctor, Integer> {

}
