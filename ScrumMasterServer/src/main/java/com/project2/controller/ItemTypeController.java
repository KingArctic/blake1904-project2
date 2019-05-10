package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.ItemType;

@RestController
@RequestMapping("itemtype")
public class ItemTypeController {

	// @Autowired
				@GetMapping()
				public List<ItemType> findAll(){
					return null;
				}
				@GetMapping("{id}")
				public ItemType findById(@PathVariable int id) {
					return null;
				}
				
				@PostMapping()
				public ItemType save(@RequestBody ItemType i) {
					return null;
				}
}
