class IteratorManager {
    constructor() {
        this.itrData = []
    }

    add(data) {
        this.itrData.push(data) //data push
    }

    [Symbol.iterator]() {
        return this.itrData.values() // value값 리턴

    }
}

const IteratorTest2 = () => {
    let iterData = ["one", "two", "three"]

    for (let entry of iterData) {
        console.log(entry)
    }

    let varData = ["four", "five", "six"]

    let itr = varData[Symbol.iterator]()

    let current = itr.next()

    // four, false > while 진입 > done true로 변경
    // while문을 수행하면서 value인 four를 콘솔 출력
    // itr.next()에서 남은 값은 five, six
    // five, false 발견 > 2차 while 진입 > done true로 변경
    // while문을 수행하면서 value인 five를 콘솔 출력
    // itr.next()에서 남은 값은 six
    // six, false > 3차 while 진입 > done true로 변경
    // while문을 수행하면서 value인 six를 콘솔 출력
    // itr.next()에서 남은 값을 찾아보니 이제 없네?
    // itr에 값이 없다면 undefined, true인데
    // 현재 while문의 조건은 true인 상황에서
    // 값이 없는 done이 while에 들어간다면 기존 true에서 > !true > false로 변경되어
    // 현재 while 수행 조건인 true에 맞지 않아 종료하게 된다.
    while (!current.done) {
        console.log(current.value)
        current = itr.next() // 무한루프 방지
        console.log(current)
    }


    return (
        <div className="IteratorTest2">
            <p>
                IteratorTest2
            </p>
        </div>
    )
}

export default IteratorTest2