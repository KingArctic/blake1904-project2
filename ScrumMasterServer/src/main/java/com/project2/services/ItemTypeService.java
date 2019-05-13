package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.model.ItemType;
import com.project2.repositories.ItemTypeRepo;

@Service
public class ItemTypeService {
	
	@Autowired
	private ItemTypeRepo itemTypeRepo;
	
	public List<ItemType> findAll(){
		return itemTypeRepo.findAll();
	}
	
	public ItemType findById(int id) {
		return itemTypeRepo.getOne(id);
	}
	
	
	public ItemType save(ItemType i) {
		return itemTypeRepo.save(i);
	}
}
