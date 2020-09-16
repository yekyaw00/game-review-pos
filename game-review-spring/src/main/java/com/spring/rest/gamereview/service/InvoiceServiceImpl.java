package com.spring.rest.gamereview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.rest.gamereview.entity.Invoice;
import com.spring.rest.gamereview.repo.InvoiceRepo;

@Service
public class InvoiceServiceImpl implements InvoiceService {

	@Autowired
	private InvoiceRepo repo;
	
	@Override
	public Invoice save(Invoice t) {
		return repo.save(t);
	}

	@Override
	public List<Invoice> findAll() {
		return repo.findAll();
	}

	@Override
	public Invoice findById(Integer id) {
		return repo.getOne(id);
	}

	@Override
	public void deleteById(Integer id) {
		repo.deleteById(id);
	}

}
