package com.spring.rest.gamereview.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.rest.gamereview.entity.Invoice;
import com.spring.rest.gamereview.service.BaseService;
import com.spring.rest.gamereview.service.InvoiceService;

@RestController
@RequestMapping("/invoice")
public class InvoiceApi extends BaseApi<Invoice, Integer>{

	@Autowired
	private InvoiceService service;
	
	@Override
	protected BaseService<Invoice, Integer> service() {
		return service ;
	}
	
}
