const RepeatEveryTest = () => {
    let seq = [1, 2, 3, 4, 5]
    let andTestSuccess = seq.every(reduceFunc) // every는 불리언 타입
    let andTestSuccess2 = seq.every(reduceFunc2) // every는 불리언 타입



    function reduceFunc2(value) {
        return value>3 // 벨류가 다 통과 할수있냐? 2,3이면 모두가 통과 못하니 false &&(and)연산과 같음(모두가 같아야 참)
    }인
    console.log("After every() : " + andTestSuccess2)


    function reduceFunc(value) {
        return value>0 // 벨류가 다 통과 할수있냐 ㅡ> 다 통과하니 true
    }


    console.log("After every() : " + andTestSuccess)




    return (
        <div className="RepeatEveryTest">
            <p>
                array-test : RepeatEveryTest
            </p>
        </div>
    )
}
export default RepeatEveryTest