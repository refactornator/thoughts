package com.wlindner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	private final ThoughtRepository repository;

	@Autowired
	public HomeController(ThoughtRepository repository) {
		this.repository = repository;
	}

	@RequestMapping(value = "/")
	public String index(Model model) {
		model.addAttribute("thoughts", this.repository.findAll());

		return "index";
	}

}
