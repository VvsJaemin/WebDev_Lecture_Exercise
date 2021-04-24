function plus(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var res = num1 + num2

            console.log(num1 + " + " + num2 + " = ")
            resolve(res)
        }, 3000)
    })
}

function minus(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var res = num1 - num2

            console.log(num1 + " - " + num2 + " = ")
            resolve(res)
        }, 2000)
    })
}

function mult(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var res = num1 * num2

            console.log(num1 + " * " + num2 + " = ")
            resolve(res)
        }, 1500)
    })
}

function divide(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var res = num1 / num2

            console.log(num1 + " / " + num2 + " = ")
            resolve(res)
        }, 1000)
    })
}

Promise.race([
    plus(100, 200),
    minus(100, 200),
    mult(100, 200),
    divide(100, 200)  //타임 아웃이 가장빠른 divide 값 출력
]).then(response => console.log(response))

const PromiseParallelTest3 = () => { //순차적 진행

    console.log("PromiseParallelTest3 start")

    console.log("PromiseParallelTest3 Fin")


    return (
        <div className="PromiseParallelTest3">
            <p>
                PromiseParallelTest3
            </p>
        </div>
    )
}
export default PromiseParallelTest3