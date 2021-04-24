const CICDTest2 = () => {
    let name = "test"


    if (name === "test") { // 타입도 같고 값도 같음
        console.log("CICDTest2 equal")
    } else {
        console.log("CICDTest2 not equal")
    }


    return (
        <div className="CICDTest2">
            <p>
                CICDTest2!
            </p>
        </div>
    )
}
export default CICDTest2