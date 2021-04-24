const MapSetTest = () => {
    let mapData = new Map([["apple", "red"],
        ["grape", "pupple"]])

    console.log(mapData)

    mapData.set("test1", "blue")
    mapData.set("test2", "green")

    console.log(mapData)
    console.log(mapData.get("test2")) //key 값인 "test2"의 value값을 get
    console.log(mapData.get("grape"))
    console.log(mapData.has("test1")) // key 값인 test1 이 존재 하는지 > boolean 타입으로 반환
    console.log(mapData.has("apple"))

    return (
        <div className="MapSetTest">
            <p>
                MapSetTest
            </p>
        </div>
    )
}

export default MapSetTest