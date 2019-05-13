package com.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project2.model.Bank;

public interface BankRepo extends JpaRepository<Bank, Integer>{
	
}
