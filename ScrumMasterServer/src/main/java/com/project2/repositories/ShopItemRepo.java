package com.project2.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project2.model.ShopItem;

public interface ShopItemRepo extends JpaRepository<ShopItem, Integer> {
	
	@Query("FROM ShopItem si JOIN si.rarity r ORDER BY r.rarityId")
	public List<ShopItem> findAllByRarityAsc();
}
