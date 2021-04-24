const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hello")
            resolve("World!");
        }, 2000)
    }
)

//resolve()는 promise.then
//reject()는 promise.catch
//finally는 무조건 실행
promise.then(response =>  //then은 값을 바로 전달해도 되고 다른 프로미스를 전달이 가능하다.
    console.log("Success")
).catch(function (error) {
    console.log(error)
}).finally(() => {//성공하든 실패하든 무조건 실행
    console.log("PromiseTest5 : 나는 무조건 실행된다!!!")
})


const PromiseTest5 = () => {

    console.log("PromiseTest5 start")

    console.log("PromiseTest5 Fin")


    return (
        <div className="PromiseTest5">
            <p>
                PromiseTest5
            </p>
        </div>
    )
}
export default PromiseTest5