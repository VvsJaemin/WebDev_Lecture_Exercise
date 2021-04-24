package com.example.demo.sec.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import com.example.demo.sec.domain.JwtTokenProvider;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@AllArgsConstructor @Getter @Setter @Component
public class JwtAuthenticationFilter extends GenericFilterBean{
	
	private JwtTokenProvider JwtTokenProvider;
	

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		 HttpServletResponse res = (HttpServletResponse) response;
	        HttpServletRequest req = (HttpServletRequest) request;

	        res.setHeader("Access-Control-Allow-Origin", "*");
	        res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
	        res.setHeader("Access-Control-Expose-Headers", "Authorization, X-Total-Count, Link");
	        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept," +
	                " Accept-Encoding, Accept-Language, Host, Referer, Connection, User-Agent, authorization, sw-useragent, sw-version");

	        if ( req.getMethod().equals("OPTIONS") ) {
	            res.setStatus(HttpServletResponse.SC_OK);
	            return;
	        }
	        chain.doFilter(request, response);
	}

}