package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.model.Bank;
import com.project2.repositories.BankRepo;

@Service
public class BankService {

	@Autowired
	private BankRepo bankRepo;
			
			public List<Bank> findAll(){
				return bankRepo.findAll();
			}
			
			public Bank findById(int id) {
				return bankRepo.getOne(id);
			}
			
			public Bank save(Bank b) {
				return bankRepo.save(b);
			}
}
