const SpreadTest2 = () => {
    let arrNum = [2, 3, 4]
    // 1이 먼저오고 뒤쪽에 arrNum이 오고 맨 뒤에 5가 온다.
    // ...은 어떤 특정한 객체에 들어있는 내용을 나열한다.
    
    let newArrNum = [1, ...arrNum, 5]
    console.log(arrNum)
    console.log(newArrNum)

    return (
        <div className="SpreadTest2">
            <p>
                Spread Test2
            </p>
        </div>
    )
}

export default SpreadTest2