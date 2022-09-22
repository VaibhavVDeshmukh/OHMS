package com.hospital.services;

import java.util.List;

import com.hospital.pojo.Appointment;

public interface AppointmentService {

	Appointment findById(int aid);

	List<Appointment> findByDoctor(int did);

	List<Appointment> findByPatient(int pid);

	void deleteAppointment(int id);

	Appointment addAppointment(Appointment appointment, int pid, int did);

	List<Appointment> findAll();

}
