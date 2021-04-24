const PromiseTest = () => {

    console.log("PromiseTest start")

    const promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Hello")
                resolve();
            }, 2000)
        }
    )

    promise.then(function () { //then 의미 파악 2초후 같이 헬로월드가 나오게
        console.log("World!!!")
    })

    console.log("PromiseTest Fin")


    return (
        <div className="PromiseTest">
            <p>
                PromiseTest
            </p>
        </div>
    )
}
export default PromiseTest