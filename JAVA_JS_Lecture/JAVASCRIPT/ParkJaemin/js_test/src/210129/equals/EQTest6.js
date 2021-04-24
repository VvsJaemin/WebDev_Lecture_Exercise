const EQTest6 = () => {
    let name = "test"
    name = undefined

    if (name == undefined) {
        console.log("EQTest6 equal")
    } else {
        console.log("EQTest6 not equal")
    }


    return (
        <div className="EQTest6">

            <p>

                Equals Test6

            </p>
        </div>
    )
}

export default EQTest6