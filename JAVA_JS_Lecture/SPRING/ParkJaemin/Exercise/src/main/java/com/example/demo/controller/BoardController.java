package com.example.demo.controller;


import com.example.demo.entity.Board;
import com.example.demo.service.BoardService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@Log
@RestController
@RequestMapping("/boards")
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
public class BoardController {

    @Autowired
    private BoardService service;


    @GetMapping("")
    public ResponseEntity<List<Board>> list() throws Exception {
        log.info("list()");

        return new ResponseEntity<>(service.list(), HttpStatus.OK);
    }

    @GetMapping("/{boardNo}")
    public ResponseEntity<Board> read(
            @PathVariable("boardNo") Long boardNo) throws Exception {
        log.info("read()");

        Board board = service.read(boardNo);
        System.out.println("BoardController: " + board);

        return new ResponseEntity<Board>(board, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Board> register(
            @Validated @RequestBody Board board,
            UriComponentsBuilder uriBuilder) throws Exception {
        log.info("POST register()");

        service.register(board);

        log.info("register board.getBoardNo() = " + board.getBoardNo());

        return new ResponseEntity<>(board, HttpStatus.OK);
    }


}
