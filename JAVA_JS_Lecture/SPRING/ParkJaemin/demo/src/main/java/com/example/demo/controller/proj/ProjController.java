//package com.example.demo.controller.proj;
//
//import com.example.demo.entity.Board;
//import com.example.demo.service.BoardService;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//@Controller
//@RequestMapping(value = "/proj")
//public class ProjController {
//    private static final Logger log =
//            LoggerFactory.getLogger(ProjController.class);
//
//    @Autowired
//    private BoardService service;
//
//    @GetMapping("/home")
//    public String getHome() {
//        log.info("getHome()");
//
//        return "proj/projectPage.html";
//    }
//
//
//    @GetMapping(value = "/qna")
//    public String getQnaForm(Board board) {
//
//        log.info("getQna()");
//
//
//        return "proj/projcon/Projcon.html";
//    }
//
//    @GetMapping("/register")
//    public String getRegister(Board board) {
//
//        log.info("getProjcon()");
//
//        return "spring/real_board/register";
//    }
//}
