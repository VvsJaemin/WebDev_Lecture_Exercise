const MapDeleteTest = () => {
    let mapData = new Map([["apple", "red"],
        ["grape", "pupple"]])

    console.log(mapData)

    mapData.delete("apple")


    console.log(mapData)// key값인 'apple'과 value값도 지워짐

    mapData.clear() // 완전 삭제

    console.log(mapData)

    return (
        <div className="MapDeleteTest">
            <p>
                MapDeleteTest
            </p>
        </div>
    )
}

export default MapDeleteTest