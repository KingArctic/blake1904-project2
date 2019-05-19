package com.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project2.model.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	
	public User findByUsernameAndPassword(String username, String password);

}

