package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.Bank;
import com.project2.services.BankService;

@RestController
@RequestMapping("bank")
public class BankController {

	@Autowired
	private BankService bankService;
	
	@GetMapping()
	public List<Bank> findAll() {
		return bankService.findAll();
	}

	@GetMapping("{id}")
	public Bank findById(@PathVariable int id) {
		return bankService.findById(id);
	}

	@PostMapping()
	public Bank save(@RequestBody Bank b) {
		return bankService.save(b);
	}
}
