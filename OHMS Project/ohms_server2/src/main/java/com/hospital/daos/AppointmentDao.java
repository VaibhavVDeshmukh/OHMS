package com.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.pojo.Appointment;
import com.hospital.pojo.Invoice;

@Repository
public interface AppointmentDao extends JpaRepository<Appointment, Integer>{

	void save(Invoice invoice);

	
}
