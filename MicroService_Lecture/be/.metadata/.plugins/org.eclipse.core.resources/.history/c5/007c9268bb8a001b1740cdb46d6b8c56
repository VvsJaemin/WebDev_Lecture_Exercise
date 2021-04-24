package com.example.demo.sec.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.demo.sec.domain.JwtTokenProvider;
import com.example.demo.sec.filter.CustomAuthenticationEntryPoint;
import com.example.demo.sec.filter.JwtAuthenticationFilter;
import com.example.demo.uss.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class WebSecurityConfigurer extends WebSecurityConfigurerAdapter {
	@Autowired
	JwtTokenProvider jwtTokenProvider;


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic().disable().csrf().disable().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests() // 다음 Request에 대한 사용권한
																									// 체크
				.antMatchers("/*/login", "/*/signUp").permitAll() // 가입 및 인증 주소는 누구나 접근 가능
				.anyRequest().hasRole("USER") // 그외 나머지 요청은 모두 인증된 회원만 접근 가능
				.and().exceptionHandling().authenticationEntryPoint(new CustomAuthenticationEntryPoint()).and()
				.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),
						UsernamePasswordAuthenticationFilter.class);

	}
	

  

}