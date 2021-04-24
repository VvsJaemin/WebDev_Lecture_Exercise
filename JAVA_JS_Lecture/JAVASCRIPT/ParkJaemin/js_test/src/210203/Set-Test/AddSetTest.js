const AddSetTest = () => {
    let setData = new Set()

    setData.add("Cherry")
    setData.add("strawberry")
    setData.add("apple")

    console.log(setData) // 추가된 항목
    console.log("AddSetTest : " + setData.has("apple")) // setData 집합요소에 사과가 있는지?
    console.log("AddSetTest : " + setData.has("grape")) // setData 집합요소 포도가 있는지?


    return (
        <div className="AddSetTest">
            <p>
                AddSetTest
            </p>
        </div>
    )
}

export default AddSetTest