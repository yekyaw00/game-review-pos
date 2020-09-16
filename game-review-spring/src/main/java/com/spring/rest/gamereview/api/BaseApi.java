package com.spring.rest.gamereview.api;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.spring.rest.gamereview.service.BaseService;

public abstract class BaseApi<T, ID> {
	
	protected abstract BaseService<T, ID> service();
	
	@PostMapping
	public T save(@RequestBody T t) {
		return service().save(t);
	}
	
	@GetMapping
	public List<T> findAll() {
		return service().findAll();
	}
	
	@GetMapping("{id:\\d+}")
	public T findById(@PathVariable ID id) {
		return service().findById(id);
	}
	
	@DeleteMapping("{id:\\d+}")
	public void deleteById(@PathVariable ID id) {
		service().deleteById(id);
	}
	
}
