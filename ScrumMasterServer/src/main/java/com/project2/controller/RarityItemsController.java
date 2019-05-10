package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.RarityItems;

@RestController
@RequestMapping("rarityitems")
public class RarityItemsController {

	// @Autowired
			@GetMapping()
			public List<RarityItems> findAll(){
				return null;
			}
			@GetMapping("{id}")
			public RarityItems findById(@PathVariable int id) {
				return null;
			}
			
			@PostMapping()
			public RarityItems save(@RequestBody RarityItems r) {
				return null;
			}
}
