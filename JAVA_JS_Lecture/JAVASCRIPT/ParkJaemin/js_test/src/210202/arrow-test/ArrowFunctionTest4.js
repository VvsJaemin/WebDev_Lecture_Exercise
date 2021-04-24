const ArrowFunctionTest4 = () => {
    const calculator = {
        firstNum: 3,
        secondNum: 7,


        //자바 스크립트는 변수와 메서드 전부 객체로 취급 한다.
       print: function () { // 변수에 함수 할당
            const add = () => {
                console.log("ArrowFunctionTest4 : " + JSON.stringify(this)) // [object object]를 문자열로 변환
                return this.firstNum + this.secondNum // 3+7
            }
            console.log(this.firstNum + " + " + this.secondNum + " = " + add())
        }
    }

    calculator.print()

    return (
        <div className="ArrowFunctionTest4">
            <p>
                ArrowFunctionTest4
            </p>
        </div>
    )
}

export default ArrowFunctionTest4