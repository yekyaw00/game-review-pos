package com.spring.rest.gamereview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.rest.gamereview.entity.Account;
import com.spring.rest.gamereview.repo.AccountRepo;

@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AccountRepo repo;
	
	@Override
	public Account save(Account t) {
		t.setPassword(passwordEncoder.encode(t.getPassword()));
		return repo.save(t);
	}

	@Override
	public List<Account> findAll() {
		return repo.findAll();
	}

	@Override
	public Account findById(Integer id) {
		return repo.getOne(id);
	}

	@Override
	public void deleteById(Integer id) {
		repo.deleteById(id);
	}

}
