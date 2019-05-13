package com.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project2.model.Question;

public interface QuestionRepo extends JpaRepository<Question, Integer> {

}
