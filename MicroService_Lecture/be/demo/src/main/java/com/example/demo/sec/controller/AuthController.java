package com.example.demo.sec.controller;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.uss.domain.UserDto;



@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="*")
public class AuthController{
	
	@GetMapping("/insertMany")
	public Map<String, Object> insertMany() {
		
		System.out.println("insertMany 들어옴");
		Map<String, Object> map = new HashMap<>();
		map.put("data", "SUCCESS");
		return map;
		
		// res가 json이니깐 자바에선 map이랑 매칭이 된다. 
		
		// map - res // put 값이 data가 된다. 
	}
	
//
//	@PostMapping("/login") // post - 2가지 (insert, 보안이 필요 필요할 때 사용) // 보안 필요하지 않을 경우 getMapping
//	public ResponseEntity<?> login(@RequestBody UserDto user) {
//		// 바디에 아이디랑 비번이 있다, 여기선 유저 엔티티는 분리되어 있기 때문에 쓰면 안된다
//		Map<String, Object> map = new HashMap<>();
//
//		return new ResponseEntity<>(map, HttpStatus.OK);
//
//	}

}
