package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.NextLevel;

@RestController
@RequestMapping("nextlevel")
public class NextLevelController {

	// @Autowired
	@GetMapping()
	public List<NextLevel> findAll(){
		return null;
	}
	@GetMapping("{id}")
	public NextLevel findById(@PathVariable int id) {
		return null;
	}
	
	@PostMapping()
	public NextLevel save(@RequestBody NextLevel n) {
		return null;
	}
}