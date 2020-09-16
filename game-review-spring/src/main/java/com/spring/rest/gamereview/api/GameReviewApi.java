package com.spring.rest.gamereview.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.rest.gamereview.entity.GameReview;
import com.spring.rest.gamereview.service.BaseService;
import com.spring.rest.gamereview.service.GameReviewService;

@RestController
@RequestMapping("/game-review")
public class GameReviewApi extends BaseApi<GameReview, Integer>{

	@Autowired
	private GameReviewService service;
	
	@Override
	protected BaseService<GameReview, Integer> service() {
		return service;
	}
	
	@GetMapping(params = {"name"})
	public List<GameReview> findByName(@RequestParam String title){
		return service.findByTitle(title);
	}
	
}
