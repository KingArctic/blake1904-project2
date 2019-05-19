package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.Dto.CredentialDto;
import com.project2.model.User;
import com.project2.repositories.UserRepo;
@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;
	public List<User> findAll(){
		return userRepo.findAll();
	}
	
	public User findById(int id) {
		return userRepo.getOne(id);
	}
	
	
	public User save(User u) {
		return userRepo.save(u);
	}

	public User login(CredentialDto user) {
		return userRepo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
	}
	
}
