//회원 상세정보
import React from 'react';
const UserDetail = () => (
    <form>
        <div className="container" align="center">
            <h2>회원정보 상세</h2>
            <form name="detail" method="post"/>
            <table border="1" width="400px"/>
            <br/>
            <tr>
                <td>아이디</td>
                <td><input type="text" value="Id001"/></td>
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
                <td>회원정보 수정일</td>
                <td><input type="text"/></td>

            </tr>
        </div>
    </form>
);

export default UserDetail;