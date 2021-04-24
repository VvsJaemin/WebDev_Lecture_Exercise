const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hello")
            resolve("World!!!"); // 성공했을때 수행
        }, 2000)
    }
)//쓰레드화

promise.then(function (response) {
    console.log(response)
}) // 쓰레드화 // 프로미스 사용 시 관리는 자바스크립트 엔진이 관리하여 빠름
//프로미스가 잘 수행이되어서 resolve를 가리키는 값인 world!!!가 response의 파라미터로 전달되어 출력


const PromiseTest2 = () => { // 따로 돌고 출력

    console.log("PromiseTest2 start")

    // promise.then(function (response) {
    //     console.log(response)
    // })

    console.log("PromiseTest2 Fin")


    return (
        <div className="PromiseTest2">
            <p>
                PromiseTest2
            </p>
        </div>
    )
}
export default PromiseTest2