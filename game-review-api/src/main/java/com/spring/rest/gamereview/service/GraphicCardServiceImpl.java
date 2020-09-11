package com.spring.rest.gamereview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.rest.gamereview.entity.GraphicCard;
import com.spring.rest.gamereview.repo.GraphicCardRepo;

@Service
public class GraphicCardServiceImpl implements GraphicCardService {

	@Autowired
	private GraphicCardRepo repo;
	
	@Override
	public GraphicCard save(GraphicCard t) {
		return repo.save(t);
	}

	@Override
	public List<GraphicCard> findAll() {
		return repo.findAll();
	}

	@Override
	public GraphicCard findById(Integer id) {
		return repo.getOne(id);
	}

	@Override
	public void deleteById(Integer id) {
		repo.deleteById(id);
	}

	@Override
	public List<GraphicCard> findByTitle(String title) {
		return repo.findByTitle(title);
	}

}
