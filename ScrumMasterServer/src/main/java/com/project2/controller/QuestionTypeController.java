package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.QuestionType;
import com.project2.services.QuestionTypeService;

@RestController
@RequestMapping("questiontype")
public class QuestionTypeController {

	@Autowired
	private QuestionTypeService questionTypeService;
	
	@GetMapping()
	public List<QuestionType> findAll() {
		return questionTypeService.findAll();
	}

	@GetMapping("{id}")
	public QuestionType findById(@PathVariable int id) {
		return questionTypeService.findById(id);
	}

	@PostMapping()
	public QuestionType save(@RequestBody QuestionType q) {
		return questionTypeService.save(q);
	}
}
