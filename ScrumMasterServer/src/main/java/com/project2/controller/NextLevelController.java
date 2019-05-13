package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.NextLevel;
import com.project2.services.NextLevelService;

@RestController
@RequestMapping("nextlevel")
public class NextLevelController {

	@Autowired
	NextLevelService nextLevelService;
	
	@GetMapping()
	public List<NextLevel> findAll(){
		return nextLevelService.findAll();
	}
	@GetMapping("{id}")
	public NextLevel findById(@PathVariable int id) {
		return nextLevelService.findById(id);
	}
	
	@PostMapping()
	public NextLevel save(@RequestBody NextLevel n) {
		return nextLevelService.save(n);
	}
}
