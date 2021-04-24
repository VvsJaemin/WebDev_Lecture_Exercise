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

Promise.all([
    plus(100, 200),
    minus(100, 200),
    mult(100, 200),
    divide(100, 200) // 원하는 형태로 배열 완성
]).then(response => console.log(response))

const PromiseParallelTest2 = () => { //순차적 진행

    console.log("PromiseParallelTest2 start")

    console.log("PromiseParallelTest2 Fin")


    return (
        <div className="PromiseParallelTest2">
            <p>
                PromiseParallelTest2
            </p>
        </div>
    )
}
export default PromiseParallelTest2