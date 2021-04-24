const NewMapInitTest = () => {
    let mapData = new Map([["apple", "red"],
        ["grape", "pupple"]])

    console.log(mapData) // apple > red // grape > pupple => mapping작업
    console.log("Size : " + mapData.size) // 배열 사이즈

    return (
        <div className="NewMapInitTest">
            <p>
                NewMapInitTest
            </p>
        </div>
    )
}

export default NewMapInitTest