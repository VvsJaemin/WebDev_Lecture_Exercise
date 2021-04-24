const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hello")
            reject("Error!");
        }, 2000)
    }
)

promise.then(function (response) { //then은 값을 바로 전달해도 되고 다른 프로미스를 전달이 가능하다.
    console.log("Success")
}).catch(function (error) {
    console.log(error)
}).finally(()=>{//성공하든 실패하든 무조건 실행
    console.log("나는 무조건 실행된다!!!")
})


const PromiseTest4 = () => {

    console.log("PromiseTest4 start")

    console.log("PromiseTest4 Fin")


    return (
        <div className="PromiseTest4">
            <p>
                PromiseTest4
            </p>
        </div>
    )
}
export default PromiseTest4