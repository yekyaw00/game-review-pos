package com.spring.rest.gamereview.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class GraphicCard implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	private String year;
	
	@Enumerated(EnumType.STRING)
	private Quarter quarter;
	
	@Enumerated(EnumType.STRING)
	private ChipsetBrand chipsetBrand;
	
	private String productBrand;
	
	private String ramType;
	
	@Enumerated(EnumType.STRING)
	private FanType fanType;
	
	@ElementCollection
	private List<String> image;
	
	private int price;
	
	@Column(columnDefinition = "TEXT")
	private String totalPorts;
	
	@Column(columnDefinition = "TEXT")
	private String aboutItem;
	
	@ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
	private Purchase purchase;
	
	public enum Quarter {
		Quarter1, Quarter2, Quarter3, Quarter4
	}
	
	public enum ChipsetBrand {
		NVIDIA, AMD
	}
	
	public enum FanType {
		SINGLE, DUAL , TRIPLE
	}
	
}
