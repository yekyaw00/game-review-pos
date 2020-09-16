package com.spring.rest.gamereview.service;

import java.util.List;

import com.spring.rest.gamereview.entity.GameReview;

public interface GameReviewService extends BaseService<GameReview, Integer> {

	List<GameReview> findByTitle(String title);

}
