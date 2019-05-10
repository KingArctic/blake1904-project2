package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.User;

@RestController
@RequestMapping("user")
public class UserController {

	// @Autowired
	@GetMapping()
	public List<User> findAll(){
		return null;
	}
	@GetMapping("{id}")
	public User findById(@PathVariable int id) {
		return null;
	}
	
	@PostMapping()
	public User save(@RequestBody User u) {
		return null;
	}
	
	
}
