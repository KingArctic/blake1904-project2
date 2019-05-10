package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.Question;

@RestController
@RequestMapping("question")
public class QuestionController {

	// @Autowired
	@GetMapping()
	public List<Question> findAll(){
		return null;
	}
	@GetMapping("{id}")
	public Question findById(@PathVariable int id) {
		return null;
	}
	
	@PostMapping()
	public Question save(@RequestBody Question o) {
		return null;
	}
}
