package com.project2.services;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project2.Dto.CredentialDto;
import com.project2.Dto.NewUserDto;
import com.project2.model.Bank;
import com.project2.model.Overall;
import com.project2.model.User;
import com.project2.repositories.UserRepo;
@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;
	@Autowired 
	private BankService bankService;
	@Autowired 
	private OverallService overallService;
	
	public List<User> findAll(){
		return userRepo.findAll();
	}
	
	public User findById(int id) {
		return userRepo.getOne(id);
	}
	
	
	public ResponseEntity<User> save(NewUserDto u, HttpServletRequest req) {
		System.out.println(u);
		System.out.println(new Bank(0));
		Bank newAccount = bankService.save(new Bank(0));
		System.out.println(newAccount);
		Overall newOverall = overallService.save(new Overall(0,0,0,0,0,0,0));
		System.out.println(newOverall);
		User user = new User(u.getName(), u.getEmail(), u.getUsername(), u.getPassword(), newAccount, newOverall);
		System.out.println(user);
		User savedUser = userRepo.save(user);
		if (savedUser != null) {
			req.getSession().setAttribute("user", savedUser);
			return new ResponseEntity<User>(user, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
		}
	}

	public User login(CredentialDto user) {
		return userRepo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
	}

	public ResponseEntity<User> update(User u, HttpServletRequest req) {
		bankService.save(u.getAccount());
		overallService.save(u.getTopicLevels());
		User savedUser = userRepo.save(u);
		if (savedUser != null) {
			req.getSession().setAttribute("user", savedUser);
			return new ResponseEntity<User>(savedUser, HttpStatus.ACCEPTED);
		} else {
			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
		}
	}
	
}
