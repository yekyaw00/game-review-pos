package com.spring.rest.gamereview.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class GameReview implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	private Date releasedDate;
	
	private String genre;
	
	@Enumerated(EnumType.STRING)
	private Mode mode;
	
	private String platform;
	
	private String gameEngine;
	
	private String publishedCompany;
	
	@ElementCollection
	private List<String> cardPhoto;
	
	@Column(columnDefinition = "TEXT")
	private String aboutGame;
	
	@Column(columnDefinition = "TEXT")
	private String minimumRequirement;
	
	@Column(columnDefinition = "TEXT")
	private String maximumRequirement;
	
	public enum Mode{
		SINGLE_PLAYER, MULTIPLAYER, CO_OPERATIVE
	}

}
