package com.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project2.model.Difficulty;

public interface DifficultyRepo extends JpaRepository<Difficulty, Integer>{

}
