package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.model.RarityItems;
import com.project2.repositories.RarityItemsRepo;

@Service
public class RarityItemsService {

	@Autowired
	private RarityItemsRepo rarityRepo;
				
				public List<RarityItems> findAll(){
					return rarityRepo.findAll();
				}
				
				public RarityItems findById(int id) {
					return rarityRepo.getOne(id);
				}
				
				
				public RarityItems save(RarityItems r) {
					return rarityRepo.save(r);
				}
}
