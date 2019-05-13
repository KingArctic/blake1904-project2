package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.model.QuestionType;
import com.project2.repositories.QuestionTypeRepo;

@Service
public class QuestionTypeService {

	@Autowired
	private QuestionTypeRepo questionTypeRepo;
			
			public List<QuestionType> findAll(){
				return questionTypeRepo.findAll();
			}
			
			public QuestionType findById(int id) {
				return questionTypeRepo.getOne(id);
			}
			
			
			public QuestionType save(QuestionType q) {
				return questionTypeRepo.save(q);
			}
}
