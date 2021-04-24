const NonPromiseTest2 = () => {
    function helloworld() {
        setTimeout(function () {
            console.log("Hello")

            setTimeout(function () {
                console.log("World~!!!")
            }, 1000) // 1초뒤에 월드
        }, 2000) // 2초 뒤에 hello가 먼저 //
    }

    helloworld()

    return (
        <div className="NonPromiseTest2">
            <p>
                NonPromiseTest2
            </p>
        </div>
    )
}
export default NonPromiseTest2