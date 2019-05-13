package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.ItemType;
import com.project2.services.ItemTypeService;

@RestController
@RequestMapping("itemtype")
public class ItemTypeController {

	@Autowired
	private ItemTypeService itemTypeService;
	
	@GetMapping()
	public List<ItemType> findAll() {
		return itemTypeService.findAll();
	}

	@GetMapping("{id}")
	public ItemType findById(@PathVariable int id) {
		return itemTypeService.findById(id);
	}

	@PostMapping()
	public ItemType save(@RequestBody ItemType i) {
		return itemTypeService.save(i);
	}
}
