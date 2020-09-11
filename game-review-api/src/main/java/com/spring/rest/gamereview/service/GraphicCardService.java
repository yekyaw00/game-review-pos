package com.spring.rest.gamereview.service;

import java.util.List;

import com.spring.rest.gamereview.entity.GraphicCard;

public interface GraphicCardService extends BaseService<GraphicCard, Integer> {
	
	List<GraphicCard> findByTitle(String title);
}
