const SetEntryIterationTest = () => {
    console.log("SetEntryIterationTest Start")

    let setData = new Set()

    setData.add("Cherry")
    setData.add("strawberry")
    setData.add("apple")


    console.log(setData)

    var setIter = setData.entries()
    // Set 객체 내 각 값[value, value] 배열 포함
    // key, value는 같은 값을 갖는다.


    for (var entry of setIter) {
        console.log(entry)
    }

    console.log("SetEntryIterationTest fin")

    return (
        <div className="SetEntryIterationTest">
            <p>
                SetEntryIterationTest
            </p>
        </div>
    )
}

export default SetEntryIterationTest