package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.model.ShopItem;
import com.project2.repositories.ShopItemRepo;
@Service
public class ShopItemService {
	@Autowired
	private ShopItemRepo shopRepo;
	
	public List<ShopItem> findAll(){
		return shopRepo.findAllByRarityAsc();
	}
	
	public ShopItem findById(int id) {
		return shopRepo.getOne(id);
	}
	
	
	public ShopItem save(ShopItem s) {
		return shopRepo.save(s);
	}
}
