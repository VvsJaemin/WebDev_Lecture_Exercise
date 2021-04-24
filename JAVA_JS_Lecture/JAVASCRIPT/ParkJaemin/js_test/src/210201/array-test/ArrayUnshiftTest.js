const ArrayUnshiftTest = () => {

    let arr = ["one", "two", "three"]

    console.log("Before Unshift = " + arr)


    let len = arr.unshift(333) //앞에 추가되어 붙는다.

    console.log("After Unshift = " + arr)

    console.log("Unshift Length = " + len)


    return (
        <div className="ArrayUnshiftTest">
            <p>
                ArrayUnshiftTest
            </p>
        </div>
    )
}

export default ArrayUnshiftTest
