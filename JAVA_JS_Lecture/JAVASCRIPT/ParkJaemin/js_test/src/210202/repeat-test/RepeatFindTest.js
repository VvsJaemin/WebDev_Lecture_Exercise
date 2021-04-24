const RepeatFindTest = () => {
    let seq = [1, 2, 3, 4, 5]
    let firstFind = seq.find(findFunc)



    function findFunc(value) {
        return value>3 // value가 3보다 다음으로 큰 값을 찾아 준다.
    }
    console.log("After find() : " + firstFind)

    let firstFindIdx = seq.findIndex(findIdxFunc)

    function findIdxFunc(value){
        return value>4
    }

    console.log("After findIdx() : " + firstFindIdx)
    // value가 다음으로 배열 길이 값[4]을 찾아 준다




    return (
        <div className="RepeatFindTest">
            <p>
                array-test : RepeatFindTest
            </p>
        </div>
    )
}
export default RepeatFindTest