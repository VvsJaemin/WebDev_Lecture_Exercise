const CustomMathTest = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    function myFindArrMax(arr){
        let len = arr.length
        let max = -Infinity;

        while(len--){ //배열 길이 만큼 하나씩 감소
            if(arr[len]>max){ //배열길이 > -음수(무한대)
                max = arr[len] // 배열값은 max에 대입
            }
        }
        return max // max 값 반환
    }

    function myFindArrMin(arr){
        let len = arr.length
        let min = Infinity

        while(len--){ // 배열의 길이 만큼 하나씩 감소
            if(arr[len]<min){ // 배열의 길이 < 양수(무한대)
                min = arr[len] // 배열값은 min에 대입
            }
        }
        return min // min 값 반환
    }

    console.log("myFindArrMax() = " + myFindArrMax(arr))
    console.log("myFindArrMin() = " + myFindArrMin(arr))

    return (
        <div className="CustomMathTest">
            <p>
                array-test : CustomMathTest
            </p>
        </div>
    )
}
export default CustomMathTest