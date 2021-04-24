const ArraySortTest = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    console.log("Before Reverse : " + arr)
    arr.reverse() // 현재 배열을 역순으로 나열한다.
    console.log("Before Reverse : " + arr)

    return(
        <div className="ArraySortTest">
            <p>
                array-test : ArraySortTest
            </p>
        </div>
    )
}
export default ArraySortTest