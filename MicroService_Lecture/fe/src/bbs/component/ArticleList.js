import React from 'react';
const ArticleList = () => (
    <form>
        <div className="container" align="center">
            <h1 align="center">게시판 목록</h1>
            <table border="1" align="center">
                <tr>
                    <th align="center" width="80">번호</th>
                    <th align="center" width="320">제목</th>
                    <th align="center" width="100">작성자</th>
                    <th align="center" width="180">등록일자</th>
                </tr>
            </table>
        </div>
    </form>
);

export default ArticleList;