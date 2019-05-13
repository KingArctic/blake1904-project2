package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.model.Overall;
import com.project2.repositories.OverallRepo;
@Service
public class OverallService {

	@Autowired
	private OverallRepo overallRepo;
	
	public List<Overall> findAll(){
		return overallRepo.findAll();
	}
	
	public Overall findById(int id) {
		return overallRepo.getOne(id);
	}
	
	
	public Overall save(Overall o) {
		return overallRepo.save(o);
	}
}
