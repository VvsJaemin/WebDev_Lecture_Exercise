const FinalEqCicdTest = () => {
    let test = 0

    if (test) {
        console.log(" FinalEqCicdTest success")
    } else {
        console.log("FinalEqCicdTest failure")
    }

    // 결국 문자열 형태로 숫자가 날아왔을때
    // 값의 비교는 숫자와 ==을 사용하여 비교해도 무방
    if (test == false) { // let test는 문자열이고 값이 넘버 0이라 false가 맞기때문에 success가 출력됐다.
        console.log("FinalEqCicdTest success")
    } else {
        console.log("FinalEqCicdTest failure")
    }

    // 그러나 값 자체의 데이터 타입이 중요하다면 ===을 사용하도록 한다.
    if (test === false) {
        console.log("FinalEqCicdTest success")
    } else {
        console.log("FinalEqCicdTest failure")
    }


    return (
        <div className="FinalEqCicdTest">

            <p>

                FinalEqCicdTest

            </p>
        </div>
    )
}

export default FinalEqCicdTest