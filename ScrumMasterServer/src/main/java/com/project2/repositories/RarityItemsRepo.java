package com.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project2.model.RarityItems;

public interface RarityItemsRepo extends JpaRepository<RarityItems, Integer> {

}
