const NewSetInitTest = () => {
    let setData = new Set(["Banana", "Watermelon"])

    console.log("NewSetInitTest : " + setData) // Set 초기값 출력
    console.log("NewSetInitTest : " + setData.size) // 배열의 길이 값 출력


    return (
        <div className="NewSetInitTest">
            <p>
                NewSetInitTest
            </p>
        </div>
    )
}

export default NewSetInitTest