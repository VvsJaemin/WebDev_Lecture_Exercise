const Homework = () => {
//) 자바스크립트 배열에 랜덤한 숫자를 n개 생성한다.
//    n개의 배열에서 3의 배수만 골라보도록 하자!
//    (이 문제는 중복을 허용한다)
    class arr2 {

        constructor() {
            this.arr1 = []
            this.rand = Math.floor(Math.random() * 30) + 1

        }

    }

    let Arr2 = new arr2()



    for (let i = 0; i <Arr2.arr1.length; i++) {
        let ran = Arr2.rand
        if (ran % 3 == 0) {
            Arr2.arr1.push(ran)


        }

        console.log(ran)
    }


    return (
        <div className="Homework1">
            <p>

                Homework

            </p>

        </div>
    )

}

export default Homework