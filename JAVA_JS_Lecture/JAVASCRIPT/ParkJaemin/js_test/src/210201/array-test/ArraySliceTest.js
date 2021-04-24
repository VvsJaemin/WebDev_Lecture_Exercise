const ArraySliceTest = () => {

    let arr = [1, 2, 3, 4, 5, 6, 7]

    console.log("Before slice = " + arr)

    let slicedArr = arr.slice(3)

    console.log("slicedArr = " + slicedArr)
    console.log("After Slice = " + arr) // 슬라이스는 실행해도 원본이 바뀌지 않는다.


    arr = [1, 2, 3, 4, 5, 6, 7]

    console.log("Before slice = " + arr)

    slicedArr = arr.slice(1)

    console.log("slicedArr = " + slicedArr)
    console.log("After Slice = " + arr)


    return (
        <div className="ArraySliceTest">
            <p>
                ArraySliceTest
            </p>
        </div>
    )
}

export default ArraySliceTest
