// 회원 리스트
import React from 'react';
const UserList = () => (
    <form>
        <div className="container" align="center">
            <h2>회원 목록</h2>
                    <table border="1" width="700px">
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>회원가입일</th>
                </tr>
                <tr>
                    <th>Id001</th>
                    <th>박재민</th>
                    <th>asdasd@gmail.com</th>
                    <th>2021-03-15</th>
                </tr>
             
            </table><br/>
            <div>
            <input type="button" value="회원등록" align="center"/>
            </div>
        </div>
    </form>
);

export default UserList;
