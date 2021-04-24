package com.example.demo.bbs.domain;

import javax.persistence.*;

@Entity
@Table(name = "boards")
public class Board {

	@Id
	@GeneratedValue

	@Column(name = "board_No")
	private long boardNo;

	@Column(name = "name")
	private String name;

	@Column(name = "title")
	private String title;

	@Column(name = "content")
	private String content;

}
