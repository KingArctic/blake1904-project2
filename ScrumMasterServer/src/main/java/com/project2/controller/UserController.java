package com.project2.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.Dto.CredentialDto;
import com.project2.Dto.NewUserDto;
import com.project2.model.ShopItem;
import com.project2.model.User;
import com.project2.services.UserService;

@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping()
	public List<User> findAll() {
		return userService.findAll();
	}

	@GetMapping("{id}")
	public User findById(@PathVariable int id) {
		return userService.findById(id);
	}

	@GetMapping("/highest")
	public User getScrumMaster() {
		return userService.getScrumMaster();
	}

	@GetMapping("inventory/{id}")
	public List<ShopItem> getInventoryByID(@PathVariable int id) {
		User tempUser = userService.findById(id);
		System.out.println(tempUser);
		List<ShopItem> inventory = tempUser.getInventory();
		System.out.println(inventory);
		return inventory;
	}

	@PostMapping()
	public ResponseEntity<User> save(@RequestBody NewUserDto u, HttpServletRequest req) {
		return userService.save(u, req);
	}

	@PatchMapping()
	public ResponseEntity<User> update(@RequestBody User u, HttpServletRequest req) {
		return userService.update(u, req);
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody CredentialDto credentials, HttpServletRequest req) {
		User user = userService.login(credentials);
		if (user != null) {
			req.getSession().setAttribute("user", user);
			return new ResponseEntity<User>(user, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
		}
	}

}
