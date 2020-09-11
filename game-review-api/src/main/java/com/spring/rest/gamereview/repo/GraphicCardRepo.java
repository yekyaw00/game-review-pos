package com.spring.rest.gamereview.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.rest.gamereview.entity.GraphicCard;

public interface GraphicCardRepo extends JpaRepository<GraphicCard, Integer> {

	List<GraphicCard> findByTitle(String title);
}
