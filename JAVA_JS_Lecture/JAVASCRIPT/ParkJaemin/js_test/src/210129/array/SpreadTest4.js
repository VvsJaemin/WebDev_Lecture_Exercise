const SpreadTest4 = () => {
    let arrStr = [..."xyz"]

    console.log("SpreadTest4:" + arrStr) // x,

    function spreadArrPrint(a, b, c) {
        console.log("spreadArrPrint4: " + a) // x출력
        console.log("spreadArrPrint4: " + b) // y출력
        console.log("spreadArrPrint4: " + c) // z출력 // 흩뿌려준다.
    }

    spreadArrPrint(...arrStr)

    return (
        <div className="SpreadTest4">
            <p>
                Spread Test4
            </p>
        </div>
    )
}

export default SpreadTest4