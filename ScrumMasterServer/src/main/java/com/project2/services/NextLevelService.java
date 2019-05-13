package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.model.NextLevel;
import com.project2.repositories.NextLevelRepo;

@Service
public class NextLevelService {
	@Autowired
	private NextLevelRepo nextLevelRepo;
	
		public List<NextLevel> findAll(){
			return nextLevelRepo.findAll();
		}
		
		public NextLevel findById(int id) {
			return nextLevelRepo.getOne(id);
		}
		
		
		public NextLevel save(NextLevel n) {
			return nextLevelRepo.save(n);
		}
}
