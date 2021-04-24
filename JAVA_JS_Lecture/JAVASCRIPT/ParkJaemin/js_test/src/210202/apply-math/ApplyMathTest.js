const ApplyMathTest = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    function findArrMax(arr){
        return Math.max.apply(null,arr)
        //최대값 리턴 // apply의 기능 공부 // null은 this와 관계없이 동작하기 때문
    }

    function findArrMin(arr){
        return Math.min.apply(null, arr) // 최소 값 리턴
    }

    console.log("Before findArrMax() = "+ arr) // 배열 안의 값 출력
    console.log("findArrMax() = "+ findArrMax(arr)) // 최대 값 출력
    console.log("findArrMin() = "+ findArrMin(arr)) // 최소 값 출력


    return (
        <div className="ApplyMathTest">
            <p>
                array-test : ApplyMathTest
            </p>
        </div>
    )
}
export default ApplyMathTest