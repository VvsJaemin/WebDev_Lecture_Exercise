package com.example.demo.sec.domain;

import java.util.Base64;
import java.util.Collection;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {
	@Value("spring.jwt.secret") // 외부에서 기본값을 주는 시스템 
    private String SECRET_KEY;
    private long tokenValidMilisecond = 1000L * 60 * 60; // 1시간만 토큰 유효
    private final UserDetailsService userDetailsService;
    @PostConstruct // 생성 이후에 만들어라 
    protected void init() {
    	SECRET_KEY = Base64.getEncoder().encodeToString(SECRET_KEY.getBytes());
    } // 객체가 만들어 진 뒤에 키는 base64로 키를 발급하겠다. 
    
    public String createToken(String userPk, Collection<? extends GrantedAuthority> roles) {  // 1(userPk)이라는 아이디에 역할을 몇개 줄 것인가?
    	Claims claims = Jwts.claims().setSubject(userPk);
    	claims.put("roles", roles);
    	Date now = new Date(); // 오소는 오센안에 들어가야한다. 
    	
    	return Jwts.builder()// jwts j = new jwts(); -> 빌더 패턴 // roles라는 jwt값을 
    			   .setClaims(claims) // 개인정보
    			   .setIssuedAt(now) // 시간주고 
    			   .setExpiration(new Date(now.getTime() + tokenValidMilisecond)) // 만료시간 
    			   .signWith(SignatureAlgorithm.HS256, SECRET_KEY) // 서명
    			   .compact() 
    			   ;
    } // authen - 로그인 /  author - 인가, 권한 (현재 유저가 어떤 서비스 , 페이지에 접근할 수 있도록 권한 부여 
}