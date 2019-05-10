package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.QuestionType;
@RestController
@RequestMapping("questiontype")
public class QuestionTypeController {

	// @Autowired
		@GetMapping()
		public List<QuestionType> findAll(){
			return null;
		}
		@GetMapping("{id}")
		public QuestionType findById(@PathVariable int id) {
			return null;
		}
		
		@PostMapping()
		public QuestionType save(@RequestBody QuestionType q) {
			return null;
		}
}
