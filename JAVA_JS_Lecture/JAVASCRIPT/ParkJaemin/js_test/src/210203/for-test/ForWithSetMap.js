const ForWithSetMap = () => {
    let mapData = new Map([
        ["David", "Physics"],
        ["Kevin", "Society"]])

    console.log(mapData) //

    for (let data of mapData) { // 각각의 엔트리로 출력
        console.log(data)
    }

    let setData = new Set(["David", "Kevin"])

    console.log(setData)

    for (let data of setData) { // 각각의 대한 밸류값 출력
        console.log(data)
    }

    return (
        <div className="ForWithSetMap">
            <p>
                ForWithSetMap
            </p>
        </div>
    )
}

export default ForWithSetMap