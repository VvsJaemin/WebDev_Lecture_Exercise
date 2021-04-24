const SpreadTest3 = () => {
    let arr = [1, 2, 3]
    // 1이 먼저오고 뒤쪽에 arrNum이 오고 맨 뒤에 5가 온다.
    // ...은 어떤 특정한 객체에 들어있는 내용을 나열한다.


    console.log(arr)

    // function 부분 거슬릴 것임 아래는 거슬리는 이유다.
    // 1) 함수 내 함수가 들어있음
    // 2) 입력 인자에 데이터 타입이 없음
    function spreadArrPrint(a, b, c) {
        console.log("spreadArrPrint3: " + a)
        console.log("spreadArrPrint3: " + b)
        console.log("spreadArrPrint3: " + c)
    }

    spreadArrPrint(...arr) // arr의 값을가져와 a,b,c에서 1,2,3으로 변환

    return (
        <div className="SpreadTest3">
            <p>
                Spread Test3
            </p>
        </div>
    )
}

export default SpreadTest3