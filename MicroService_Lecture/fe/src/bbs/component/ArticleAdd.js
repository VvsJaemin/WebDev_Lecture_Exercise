import React from 'react';
import ReactDOM from 'react-dom';
const ArticleAdd = () => (
    <form>
        <div className="container" align="center">
            <h2> 게시글을 등록해주세요 
            </h2>
            <table>
                <tr>
                    <td>제목</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>본문</td>
                    <td>
                        <textarea rows="5"></textarea>
                    </td>
                </tr>
            </table>
        </div>
    </form>
);

export default ArticleAdd;
