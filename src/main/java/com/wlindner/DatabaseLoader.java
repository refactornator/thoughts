package com.wlindner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ThoughtRepository repository;

	@Autowired
	public DatabaseLoader(ThoughtRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception { }
}
