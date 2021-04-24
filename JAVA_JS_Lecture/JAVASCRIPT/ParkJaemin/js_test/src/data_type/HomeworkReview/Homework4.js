const Homework4 = () => {
    const INIT = 1

    const START = 0
    const END = 15

    const CRITERIA = 15

    const ERROR = -1

    var emp = []
    var empNum

    // 무언가 됐던 15개를 채운다는 의미
    for(var i = START; i < END; ) {
        empNum = Math.floor(Math.random() * CRITERIA) + INIT;

        // indexOf()를 통해 특정 값을 찾아줌
        // 만약 찾지 못한다면 에러의 의미로 -1 을 리턴한다.
        // 실제 리턴하는 타입이 Number에 해당하므로 == 도 무방
        if(emp.indexOf(empNum) == ERROR) {
             // 1이 있어 없어? ㅡ> 없네? ㅡ> 그럼 -1
            // ㅡ> -1==error랑 같다면 if문 수행
            emp.push(empNum) // push를 통해 숫자를 추가 해준다.
            //cf.) 만약 다시 if문을 수행하는데 1이 있다면
            // 이미 있으니깐 추가가 안되어 중복이 배제된다.
            console.log("Homework4: %d - %d", i, emp[i++])
        }
    }

    return (
        <div className="Homework4">
            <p>
                Homework 4
            </p>
        </div>
    )
}

export default Homework4