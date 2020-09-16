package com.spring.rest.gamereview.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.rest.gamereview.entity.GameReview;

public interface GameReviewRepo extends JpaRepository<GameReview, Integer> {
	
	List<GameReview> findByTitle(String title); 
}
