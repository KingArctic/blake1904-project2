package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.Difficulty;
import com.project2.services.DifficultyService;

@RestController
@RequestMapping("difficulty")
public class DifficultyController {

	@Autowired
	private DifficultyService difficultyService;
	
	@GetMapping()
	public List<Difficulty> findAll() {
		return difficultyService.findAll();
	}

	@GetMapping("{id}")
	public Difficulty findById(@PathVariable int id) {
		return difficultyService.findById(id);
	}

	@PostMapping()
	public Difficulty save(@RequestBody Difficulty d) {
		System.out.println(d);
		d.setDifficultyId(1);
		System.out.println(d);
		return difficultyService.save(d);
	}
}
