package com.spring.rest.gamereview.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.rest.gamereview.entity.Account;

public interface AccountRepo extends JpaRepository<Account, Integer>{

	
}
