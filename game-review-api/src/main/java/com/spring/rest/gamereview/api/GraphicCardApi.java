package com.spring.rest.gamereview.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.rest.gamereview.entity.GraphicCard;
import com.spring.rest.gamereview.service.BaseService;
import com.spring.rest.gamereview.service.GraphicCardService;

@RestController
@RequestMapping("/graphic-card")
public class GraphicCardApi extends BaseApi<GraphicCard, Integer>{

	@Autowired
	private GraphicCardService service;
	
	@Override
	protected BaseService<GraphicCard, Integer> service(){
		return service;
	}
	
	@GetMapping(params = {"name"})
	public List<GraphicCard> findByName(@RequestParam String title){
		return service.findByTitle(title);
	}
	
}
