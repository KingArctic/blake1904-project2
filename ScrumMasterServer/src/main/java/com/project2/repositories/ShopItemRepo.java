package com.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project2.model.ShopItem;

public interface ShopItemRepo extends JpaRepository<ShopItem, Integer> {

}
