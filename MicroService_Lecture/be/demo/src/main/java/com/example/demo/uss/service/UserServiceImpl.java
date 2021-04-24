package com.example.demo.uss.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.uss.repository.UserRepository;
import com.example.demo.uss.repository.UserRepositoryImpl;

@Service
public class UserServiceImpl implements UserService { 
	private final UserRepositoryImpl repo; 
	
	// 필드값이 상태변경이 되면 > 값이 오염되기에 불변상태로 바꿔줘야 한다.
	@Autowired
	public UserServiceImpl(UserRepositoryImpl repo) {
		this.repo=repo;
	}
}

