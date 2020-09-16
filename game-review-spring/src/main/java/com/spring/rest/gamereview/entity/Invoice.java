package com.spring.rest.gamereview.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import lombok.Data;

@Entity
@Data
public class Invoice implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@CreationTimestamp
	private LocalDateTime invoice_date;
	
	@OneToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
	private List<Purchase> purchase ;
	
	private int subtotal;
	
	private int tax;
	
	private int total;
	
}
