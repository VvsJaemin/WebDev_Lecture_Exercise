//회원 정보 변경
import React from 'react';
const UserEdit = () => (
    <form>
        <div className="container" align="center">
            <h2>회원정보 변경</h2>
            <form name="detail" method="post"/>
            <table border="1" width="400px"/>
            <br/>
            <tr>
                <td>아이디</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="password"/></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>이메일</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>회원정보 수정일 &nbsp;</td>
                <td><input type="text"/></td>

            </tr>
            <tr>
                <td colSpan="2" align="center">
                    <input type="button" value="수정"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="삭제"/>
                </td>
            </tr>
            <table/>
        </div>
    </form>
);

export default UserEdit;