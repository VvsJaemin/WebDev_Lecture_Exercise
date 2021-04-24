<template>
  <div id="board">
    <h2>게시판 목록</h2>
    <router-link :to="{ name: 'BoardRegisterPage'} ">
      등록
    </router-link>
<!--    컴포넌트 보드리스트의 기본 보드를 보여준다.-->
    <board-list :boards="boards"/>
  </div>
</template>

<script>
import BoardList from '@/components/BoardList'
import { mapState, mapActions } from 'vuex'
export default {
  name: "BoardListPage",
  components: {
    BoardList
  },
  computed: {
  //  게시판을 만들어준다. State에 설정된 기본 세팅 값을 가져 온다.
    ...mapState(['boards'])
  },
  mounted() {
    this.fetchBoardList()
  },
  methods: {
    ...mapActions(['fetchBoardList'])
  }

}
</script>

