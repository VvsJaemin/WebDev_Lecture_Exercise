function fortest(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let sum = 0
            for (var i = 1; i < num1; i++) {
                sum += (i * num2) * Math.sin(i * Math.PI / 180.0)

                resolve(sum)
            }
        }, 1000)
    })
}

function fortest2(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let sum = 0
            for (var i = 1; i < num1; i++) {
                sum += (i * num2) * Math.cos(i * Math.PI / 90.0)

                resolve(sum)
            }
        }, 1500)
    })
}


function fortest3(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let sum = 0
            for (var i = 1; i < num1; i++) {
                sum += (i * num2) * Math.sin(i * Math.PI / 270.0)

                resolve(sum)
            }
        }, 2000)
    })
}

function fortest4(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let sum1 = 0
            for (var i = 1; i < num1; i++) {
                sum1 += (i * num2) * Math.sin(i * Math.PI / 240.0)

                resolve(sum1)
            }
        }, 2000)
    })
}

async function asyncTest() {
    const sum = await Promise.all( //자동으로 쓰레드를 분리
        [
            fortest(10000000, 100),
            fortest2(10000000, 100),
            fortest3(10000000, 100),
            fortest4(10000000, 500),


        ]
    )
    console.log(sum)
  
    

}

asyncTest()


const Test = () => {
    console.log("Test start")

    console.log("Test Fin")

    return (
        <div className="Test">
            <p>
                Test
            </p>
        </div>
    )
}

export default Test
