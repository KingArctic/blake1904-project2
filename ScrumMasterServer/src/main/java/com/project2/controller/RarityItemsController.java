package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.RarityItems;
import com.project2.services.RarityItemsService;

@RestController
@RequestMapping("rarityitems")
public class RarityItemsController {

	@Autowired
	private RarityItemsService rarityService;
	
	@GetMapping()
	public List<RarityItems> findAll() {
		return rarityService.findAll();
	}

	@GetMapping("{id}")
	public RarityItems findById(@PathVariable int id) {
		return rarityService.findById(id);
	}

	@PostMapping()
	public RarityItems save(@RequestBody RarityItems r) {
		return rarityService.save(r);
	}
}
