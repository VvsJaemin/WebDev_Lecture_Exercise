package com.example.demo.controller.proj;


import com.example.demo.entity.Board;
import com.example.demo.service.BoardService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/proj")
public class QnAController {
    private static final Logger log =
            LoggerFactory.getLogger(QnAController.class);

    @Autowired
    private BoardService service;

    @GetMapping("/home")
    public String getHome() {
        log.info("getHome()");

        return "proj/projectPage.html";
    }

    @GetMapping(value = "/qna")
    public String getQnaForm(Board board) {

        log.info("getQnA()");


        return "proj/qna/qna.html";
    }

    @GetMapping("/register")
    public String getRegister(Board board) {

        log.info("getQ&A()");

        return "spring/real_board/register";
    }


    @PostMapping("/qna")
    public String doRegister(Board board, Model model)
            throws Exception {

        log.info("doQna()");

        service.register(board);

        model.addAttribute("msg",
                "등록이 완료되었습니다.");

        return "spring/real_board/success";
    }

    // Q&A 본문 읽는 기능
    @GetMapping("/read")
    public String read(int boardNo, Model model)
            throws Exception {
        log.info("Q&A read()");

        model.addAttribute(service.read(boardNo));

        return "spring/real_board/read";
    }

    // Q&A 삭제 기능
    @PostMapping("/remove")
    public String doRemove(int boardNo, Model model)
            throws Exception {
        log.info("do Q&A Remove()");

        service.remove(boardNo);

        model.addAttribute("msg", "성공적으로 지워졌습니다!");


        return "spring/real_board/success";

    }

    @GetMapping("/modify")
    public String getModify(int boardNo, Model model)
            throws Exception {
        log.info("getModify()");

        model.addAttribute(service.read(boardNo)); //보드 전체를 읽어 온다.

        return "spring/real_board/modify";
    }

    @PostMapping("/modify")
    public String doModify(Board board, Model model)
            throws Exception {
        log.info("doModify()");

        service.modify(board);

        model.addAttribute("msg",
                "성공적으로 변경되었습니다!");


        return "spring/real_board/success";
    }


}
