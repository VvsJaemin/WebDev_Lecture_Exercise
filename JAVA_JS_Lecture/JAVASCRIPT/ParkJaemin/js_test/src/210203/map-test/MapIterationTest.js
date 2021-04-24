const MapIterationTest = () => {
    let mapData = new Map([["apple", "red"],
        ["grape", "pupple"]])

    console.log(mapData)

    var keyIter = mapData.keys()

    for (var key of keyIter) { // key
        console.log(key)
    }

    var valueIter = mapData.values()

    for (var value of valueIter) { // 벨류 값
        console.log(value)
    }

    var entryIter = mapData.entries()

    for (var entry of entryIter) { // 엔트리 출력
        console.log(entry)
    }

    mapData.forEach((value, key) => // 벨류와 키 값을 스트링 인식
        console.log(key + ": " + value) // 키/밸류 값 동시 출력
    )
    return (
        <div className="MapIterationTest">
            <p>
                MapIterationTest
            </p>
        </div>
    )
}

export default MapIterationTest