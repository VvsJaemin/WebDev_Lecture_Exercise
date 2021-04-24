const RepeatSomeTest = () => {
    let seq = [1, 2, 3, 4, 5]
    let orTestSuccess = seq.some(orTestFunc)



    function orTestFunc(value) {
        return value>3  // or 연산하고 비슷함 하나라도 유효하면 true 다만, 값의 크기보다 이상일 땐 false 반환
    }
    console.log("After some() : " + orTestSuccess)




    return (
        <div className="RepeatSomeTest">
            <p>
                array-test : RepeatSomeTest
            </p>
        </div>
    )
}
export default RepeatSomeTest