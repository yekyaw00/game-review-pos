package com.spring.rest.gamereview.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.rest.gamereview.entity.Account;
import com.spring.rest.gamereview.service.AccountService;
import com.spring.rest.gamereview.service.BaseService;


@RestController
@RequestMapping("/account")
public class AccountApi extends BaseApi<Account, Integer>{

	@Autowired
	private AccountService service;

	@Override
	protected BaseService<Account, Integer> service() {
		return service;
	}
	
	

}
