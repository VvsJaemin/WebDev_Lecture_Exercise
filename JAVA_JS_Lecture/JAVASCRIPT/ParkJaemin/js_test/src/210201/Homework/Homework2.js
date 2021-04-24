const Homework2 = () => {
    // 2번 문제에서 중복을 허용하지 않고 5의 배수만 골라보자!
    //    또한 고른 값들은 모두 내림차순으로 정렬되어야 할 것이다.
    class arr2 {
        constructor() {
            this.arr1 = [30]
            this.arr2 = Math.floor(Math.random()*30)
        }

    }

    let Arr2 = new arr2()
      for (let i = 0; i <Arr2.arr1; i++) {

        if (i % 5 ==0 ) {
            console.log("Homework2 : " + i)

        }

        let sortedarr2 = Arr2.arr1.sort((a,b) => a-b)
        console.log("sosortedarr2 = " + sortedarr2)

    }




    return (
        <div className="Homework2">
            <p>

                Homework2

            </p>

        </div>
    )

}

export default Homework2