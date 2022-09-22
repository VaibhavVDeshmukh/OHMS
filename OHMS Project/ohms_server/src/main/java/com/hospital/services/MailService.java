package com.hospital.services;

import org.springframework.mail.MailException;

import com.hospital.pojo.Appointment;

public interface MailService {

	void sendEmail(Appointment app) throws MailException;

	void sendEmailforDeletion(Appointment app) throws MailException;

}
