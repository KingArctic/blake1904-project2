package com.project2.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.Dto.QuestionDto;
import com.project2.model.Question;
import com.project2.repositories.QuestionRepo;

@Service
public class QuestionService {
	@Autowired
	private QuestionRepo questionRepo;
	
		public List<Question> findAll(){
			return questionRepo.findAll();
		}
		
		public Question findById(int id) {
			return questionRepo.getOne(id);
		}
		
		
		public Question save(Question q) {
			return questionRepo.save(q);
		}

		public List<Question> findByTypeAndDifficulty(QuestionDto q) {
			return questionRepo.findbyTypeAndDifficulty(q.getType(), q.getDif());
		}
}
