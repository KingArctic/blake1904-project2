package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.Difficulty;

@RestController
@RequestMapping("difficulty")
public class DifficultyController {

	// @Autowired
			@GetMapping()
			public List<Difficulty> findAll(){
				return null;
			}
			@GetMapping("{id}")
			public Difficulty findById(@PathVariable int id) {
				return null;
			}
			
			@PostMapping()
			public Difficulty save(@RequestBody Difficulty d) {
				return null;
			}
}
