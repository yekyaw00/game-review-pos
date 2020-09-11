package com.spring.rest.gamereview.service;

import java.util.List;

public interface BaseService<T, ID> {
	T save(T t);
	List<T> findAll();
	T findById(ID id);
	void deleteById(ID id);
}
