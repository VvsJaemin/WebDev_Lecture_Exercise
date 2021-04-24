const SetKeyIterationTest = () =>{
    console.log("SetKeyIterationTest Start")

    let setData = new Set()

    setData.add("Cherry")
    setData.add("strawberry")
    setData.add("apple")


    console.log(setData)

    var setIter = setData.keys()


    for (var key of setIter){ //setIter에서 요소를 뽑아 아래 콘솔로 출력
        console.log(key)
    }

    console.log("SetKeyIterationTest fin")

    return(
        <div className="SetIterationTest">
            <p>
                SetKeyIterationTest
            </p>
        </div>
    )
}

export default SetKeyIterationTest