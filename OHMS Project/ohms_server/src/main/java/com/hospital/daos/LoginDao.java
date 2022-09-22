package com.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.pojo.Login;


@Repository
public interface LoginDao extends JpaRepository<Login, Integer> {

	Login findByEmail(String email);

	Login findByRole(String role);

	Login findByEmailAndPassword(String email, String password);

}
