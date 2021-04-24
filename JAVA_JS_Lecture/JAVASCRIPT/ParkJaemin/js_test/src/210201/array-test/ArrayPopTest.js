const ArrayPopTest = () => {

    var arr = ["one", "two", "three"]

    console.log("Before Pop = " + arr)
    let elem = arr.pop();

    console.log("After Pop = " + arr)
    let elem2 = arr.pop();

    console.log("Pop element = " + elem)
    console.log("Pop element = " + elem2)


    return (
        <div className="ArrayPopTest">
            <p>
                ArrayPopTest
            </p>
        </div>
    )
}

export default ArrayPopTest
