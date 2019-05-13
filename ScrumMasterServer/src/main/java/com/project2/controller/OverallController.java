package com.project2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.Overall;
import com.project2.services.OverallService;

@RestController
@RequestMapping("overall")
public class OverallController {

	@Autowired
	private OverallService overallService;
	
	@GetMapping()
	public List<Overall> findAll() {
		return overallService.findAll();
	}

	@GetMapping("{id}")
	public Overall findById(@PathVariable int id) {
		return overallService.findById(id);
	}

	@PostMapping()
	public Overall save(@RequestBody Overall o) {
		return overallService.save(o);
	}
}
