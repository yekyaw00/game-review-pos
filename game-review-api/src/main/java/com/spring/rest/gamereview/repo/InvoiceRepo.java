package com.spring.rest.gamereview.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.rest.gamereview.entity.Invoice;

public interface InvoiceRepo extends JpaRepository<Invoice, Integer> {

}
