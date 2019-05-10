package com.project2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.model.Overall;

@RestController
@RequestMapping("overall")
public class OverallController {

	// @Autowired
				@GetMapping()
				public List<Overall> findAll(){
					return null;
				}
				@GetMapping("{id}")
				public Overall findById(@PathVariable int id) {
					return null;
				}
				
				@PostMapping()
				public Overall save(@RequestBody Overall o) {
					return null;
				}
}
