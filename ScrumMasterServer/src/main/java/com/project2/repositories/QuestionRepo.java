package com.project2.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project2.model.Question;

public interface QuestionRepo extends JpaRepository<Question, Integer> {
	
	@Query("FROM Question q JOIN q.type qt JOIN q.difficulty qd WHERE qt.category = :type AND qd.difficultyId = :dif")
	public List<Question> findbyTypeAndDifficulty(String type, int dif);
}
