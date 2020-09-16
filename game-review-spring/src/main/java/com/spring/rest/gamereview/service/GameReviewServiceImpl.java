package com.spring.rest.gamereview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.rest.gamereview.entity.GameReview;
import com.spring.rest.gamereview.repo.GameReviewRepo;

@Service
public class GameReviewServiceImpl implements GameReviewService {

	@Autowired
	private GameReviewRepo repo;
	
	@Override
	public GameReview save(GameReview t) {
		return repo.save(t);
	}

	@Override
	public List<GameReview> findAll() {
		return repo.findAll();
	}

	@Override
	public GameReview findById(Integer id) {
		return repo.getOne(id);
	}

	@Override
	public void deleteById(Integer id) {
		repo.deleteById(id);
	}

	@Override
	public List<GameReview> findByTitle(String title) {
		return repo.findByTitle(title);
	}

}
