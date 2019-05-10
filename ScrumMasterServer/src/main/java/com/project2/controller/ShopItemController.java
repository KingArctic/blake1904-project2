package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.ShopItem;
@RestController
@RequestMapping("shopitem")
public class ShopItemController {
	// @Autowired
				@GetMapping()
				public List<ShopItem> findAll(){
					return null;
				}
				@GetMapping("{id}")
				public ShopItem findById(@PathVariable int id) {
					return null;
				}
				
				@PostMapping()
				public ShopItem save(@RequestBody ShopItem r) {
					return null;
				}

}
