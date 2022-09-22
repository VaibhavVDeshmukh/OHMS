package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.pojo.Login;
import com.hospital.pojo.Patient;
import com.hospital.services.LoginServiceImpl;
import com.hospital.services.PatientServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private LoginServiceImpl logService;

	@Autowired
	private PatientServiceImpl pService;

	@PostMapping("/register")
	public ResponseEntity<?> addUserDetails(@RequestBody Login loginBody) {
		System.out.println(loginBody);

		try {
			return new ResponseEntity<>(logService.addPatientDetails(loginBody), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("")
	public ResponseEntity<List<Patient>> findAll() {
		List<Patient> list = pService.findAll();
		if (list == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(list);
	}

	@GetMapping("/name/{name}")
	public ResponseEntity<Patient> findByName(@PathVariable("name") String name) {
		Patient patient = pService.findByPname(name);
		if (patient == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(patient);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Patient> findById(@PathVariable("id") int id) {
		Patient patient = pService.findById(id);
		if (patient == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(patient);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable("id") int id, @RequestBody Patient patient) {
		patient.setPid(id);
		Patient newPatient = pService.update(patient);
		return ResponseEntity.ok(newPatient);
	}
	
	@GetMapping("/patientbydoc/{did}")
	public ResponseEntity<List<Patient>> findAllPatientByDoctor(@PathVariable("did") int did ){
		List<Patient> plist = pService.findAllPatientByDoctor(did);
		if (plist == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(plist);
	}

}