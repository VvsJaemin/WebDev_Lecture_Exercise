import {
    FETCH_BOARD_LIST,
    FETCH_BOARD
} from './mutation-types'

import axios from "axios";

export default {
    fetchBoardList ({ commit }) {
        return axios.get('http://localhost:7777/boards')
            .then(res => {
                commit(FETCH_BOARD_LIST, res.data)
            })
    },
    fetchBoard ({ commit }, boardNo) {
        //디버깅 위한 콘솔 로그 출력
        console.log('fetchBoard ' + commit + ', boardNo = ' + boardNo)
        // 문자열과 변수를 함께 쓸 때 더 편하게 쓰기 위해서 백틱 ` 을 사용 한다.
        return axios.get(`http://localhost:7777/boards/${boardNo}`)
            .then(res => {
                console.log('fetchBoard - res: ' + res.data)
                commit(FETCH_BOARD, res.data)
            })
    }
}