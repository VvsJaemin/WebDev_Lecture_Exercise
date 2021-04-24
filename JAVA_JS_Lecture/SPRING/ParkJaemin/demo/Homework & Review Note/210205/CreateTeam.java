package com.example.demo.homework;

import java.util.ArrayList;
import java.util.Iterator;

public class CreateTeam {
    private ArrayList<String> AteamArrayList;
    private ArrayList<String> BteamArrayList;

    private String[] AteamArr;
    private String[] BteamArr;

    private int AnumOfPerson;
    private int numOfTeam;

    private int BnumOfPerson;

    public CreateTeam(String[] arrA, String[] arrB, final int TEAMNUMBER) {
        AteamArr = arrA;
        BteamArr = arrB;

        AnumOfPerson = arrA.length;
        BnumOfPerson = arrB.length;

        numOfTeam = TEAMNUMBER;

        AteamArrayList = new ArrayList<String>();
        BteamArrayList = new ArrayList<String>();
    }

    public void allocRandomTeam() {
//        for(int i = 0; i<AnumOfPerson; i++){
//            int randNum = (int)(Math.random()*AnumOfPerson);
//
//            AteamArrayList.add(AteamArr[randNum]);
//        }
//
//        for(int i = 0; i<BnumOfPerson; i++){
//            int randNum = (int)(Math.random()*BnumOfPerson) + AnumOfPerson;
//            BteamArrayList.add(BteamArr[randNum]);
//        }

        allocArrayList(
                AteamArrayList, AteamArr, AnumOfPerson
        );
        allocArrayList(
                BteamArrayList, BteamArr, BnumOfPerson
        );


    }

    public void allocArrayList(ArrayList<String> al,
                               String[] arr, int loopNum) {

        boolean isDup = false;

        for (int i = 0; i < loopNum; i++) {
            do {
                int randNum = (int) (Math.random() * loopNum);

                if (al.contains(arr[randNum])) {
                    isDup = true;
                    continue;
                } else {
                    isDup = false;
                }
                al.add(arr[randNum]);
            } while (isDup);
        }
    }

    public void printArrayList(ArrayList<String> al) {
        String name;

        Iterator e = al.iterator();

        int cnt = 1;
        int divNum;
        int quot = al.size() / numOfTeam;
        int remain = al.size() % numOfTeam;

        boolean needException = (remain > 0) ? true : false;

        int randValue = 0;

        while (e.hasNext()) {
            name = (String) e.next();
            System.out.printf("%s", name);

            if (needException) {
                randValue = (int) (Math.random() * 2);
                needException = false;
            }

            if ((cnt % (quot + randValue)) == 0) {
                System.out.println(" ");

                if (cnt == 4) {
                    randValue = 1;
                } else {
                    randValue = 0;
                }
                cnt = 0;
            }
            cnt++;
        }
        System.out.println(" ");
    }

    public ArrayList<String> getAteamArrayList() {
        return AteamArrayList;
    }

    public ArrayList<String> getBteamArrayList() {
        return BteamArrayList;
    }
}

    @GetMapping("/allocteam")
    public String getAllocTeam() {
        log.info("Enter getAllocTeam()");

        final int TEAMNUMBER = 2;
        System.out.println("지금부터 랜덤 팀 구성을 시작합니다.");

        String[] nameA = {
                "고동영", "장해솔", "류슬기", "박재민", "한다은",
                "최현정", "오진욱", "조진형", "이정현"
        };
        String[] nameB = {
                "이범진", "박소현", "탁성진", "노찬욱",
                "박기범", "하진주", "이승윤", "최임식"
        };

        // 단순히 고정된 사람들을 받는 작업
        // CreateTeam ct = new CreateTeam(name);
        CreateTeam ct = new CreateTeam(nameA, nameB, TEAMNUMBER);

        ct.allocRandomTeam();
        ct.printArrayList(ct.getAteamArrayList());
        ct.printArrayList(ct.getBteamArrayList());


        return "html_css/success.html";
    }