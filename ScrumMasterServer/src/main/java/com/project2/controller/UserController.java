package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.User;
import com.project2.services.UserService;

@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping()
	public List<User> findAll(){
		return userService.findAll();
	}
	@GetMapping("{id}")
	public User findById(@PathVariable int id) {
		return userService.findById(id);
	}
	
	@PostMapping()
	public User save(@RequestBody User u) {
		return userService.save(u);
	}
	
	
}
