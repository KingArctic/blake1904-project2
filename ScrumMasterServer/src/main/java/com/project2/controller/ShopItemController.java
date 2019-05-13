package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.ShopItem;
import com.project2.services.ShopItemService;

@RestController
@RequestMapping("shopitem")
public class ShopItemController {
	@Autowired
	private ShopItemService shopService;

	@GetMapping()
	public List<ShopItem> findAll() {
		return shopService.findAll();
	}

	@GetMapping("{id}")
	public ShopItem findById(@PathVariable int id) {
		return shopService.findById(id);
	}

	@PostMapping()
	public ShopItem save(@RequestBody ShopItem s) {
		return shopService.save(s);
	}

}
