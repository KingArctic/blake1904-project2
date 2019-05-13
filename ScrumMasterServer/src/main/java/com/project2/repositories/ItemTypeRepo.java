package com.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project2.model.ItemType;

public interface ItemTypeRepo extends JpaRepository<ItemType, Integer> {

}
