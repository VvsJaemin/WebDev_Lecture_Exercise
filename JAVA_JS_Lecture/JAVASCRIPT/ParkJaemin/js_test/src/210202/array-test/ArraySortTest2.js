const ArraySortTest2 = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    console.log("Before sort : " + arr)
    arr.sort(function (a, b) {
        return a - b // 오름차순 정렬
    })
    console.log("After sort : " + arr)
    console.log("Find Max =  : " + arr[arr.length - 1]) // 현재 기준 배열의 총길이에서 -1 = 최대값
    console.log("Find min : " + arr[0]) // 0번째 값 = 최소값


    return (
        <div className="ArraySortTest2">
            <p>
                array-test : ArraySortTest2
            </p>
        </div>
    )
}
export default ArraySortTest2