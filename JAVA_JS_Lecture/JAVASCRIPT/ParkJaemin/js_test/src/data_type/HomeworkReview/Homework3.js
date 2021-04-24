const Homework3 = () => {
    const INIT = 1;

    const START = 0;
    const END = 15;
    const CRITERIA = 10;
    var emp = [];

    // 문제 풀  변수 초기값 선언 먼저 하기

    for (var i = START; i <= END; i++) { // 1부터 15까지(직원수 for문 실행 출력)
        emp[i] = (Math.random() * CRITERIA) + INIT; // 랜덤으로 사원 번호 부여
        console.log("Homework3: %d-%d", i, emp[i]) // 1-3 , 2-4 등 출력(중복)
    }

    return (
        <div className="Homework3">
            <p>

                Homework3 Works Fine!

            </p>

        </div>
    )

}

export default Homework3