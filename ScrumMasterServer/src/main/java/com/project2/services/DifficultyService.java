package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.model.Difficulty;
import com.project2.repositories.DifficultyRepo;

@Service
public class DifficultyService {

	@Autowired
	private DifficultyRepo difficultyRepo;
	
	public List<Difficulty> findAll(){
		return difficultyRepo.findAll();
	}
	
	public Difficulty findById(int id) {
		return difficultyRepo.getOne(id);
	}
	
	
	public Difficulty save(Difficulty d) {
		return difficultyRepo.save(d);
	}
}
