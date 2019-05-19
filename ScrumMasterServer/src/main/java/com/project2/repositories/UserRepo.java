package com.project2.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project2.model.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	
	public User findByUsernameAndPassword(String username, String password);
	
	@Query("FROM User u ORDER BY u.points DESC")
	public List<User> findScroreboard();

}

