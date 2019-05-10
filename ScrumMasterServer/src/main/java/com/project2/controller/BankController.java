package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.Bank;

@RestController
@RequestMapping("bank")
public class BankController {

	// @Autowired
		@GetMapping()
		public List<Bank> findAll(){
			return null;
		}
		@GetMapping("{id}")
		public Bank findById(@PathVariable int id) {
			return null;
		}
		
		@PostMapping()
		public Bank save(@RequestBody Bank b) {
			return null;
		}
}
