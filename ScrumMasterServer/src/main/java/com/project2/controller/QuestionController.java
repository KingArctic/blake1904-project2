package com.project2.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.Dto.QuestionDto;
import com.project2.model.Question;
import com.project2.services.QuestionService;

@RestController
@RequestMapping("question")
public class QuestionController {

	@Autowired
	private QuestionService questionService;
	
	@GetMapping()
	public List<Question> findAll(){
		return questionService.findAll();
	}
	@GetMapping("{id}")
	public Question findById(@PathVariable int id) {
		return questionService.findById(id);
	}
	
	@PostMapping("/fillarrays")
	public List<Question> findByTypeAndDifficulty(@RequestBody QuestionDto q) {
		
		return questionService.findByTypeAndDifficulty(q);
	}
	
	@PostMapping()
	public Question save(@RequestBody Question q) {
		return questionService.save(q);
	}
}
