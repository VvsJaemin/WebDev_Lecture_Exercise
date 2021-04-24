const FunctionObjectTest2 = () => {

    function Programming() { //생성자 함수
        this.name = "JavaScript" // 이름에 관한 프로퍼티
        this.students = 17 // 학생에 관한 프로퍼티

    }

    Programming.prototype.getName = function () {
        //현재 존재하고 있는 Programming 프로토타입에 name을 리턴하는 getname 메소드 추가
        return this.name

    }
    // prog는 자신이 변수를 가지고 있는 것이 아니라
    // Programming.prototype이라는 object의 getName이라는 속성을 공유
    // 객체의 수 만큼 변수가 저장되는 것이 아니라 같은 생성자를 통해 만들어진 객체들은
    // 하나의 prototype이라는 object를 공유

    let prog = new Programming() // prog 객체는 Programming이라는 프로토타입을 가짐

    if (Programming) {
        console.log("FunctionObjectTest2: Programming true")
    } else {
        console.log("FunctionObjectTest2: Programming false")
    }

    console.log("FunctionObjectTest2 : " + prog)// prog 객체의 할당 된 값이 없어서?

    if (prog) {
        console.log("FunctionObjectTest2: prog true")
    } else {
        console.log("FunctionObjectTest2: prog false")
    }

    console.log("FunctionObjectTest2 : " + prog.name)

    if (prog.name) {
        console.log("FunctionObjectTest2: true")
    } else {
        console.log("FunctionObjectTest2: false")
    }

    console.log("FunctionObjectTest2 : " + prog.students)

    if (prog.students) {
        console.log("FunctionObjectTest2: true")
    } else {
        console.log("FunctionObjectTest2: false")
    }

    console.log("FunctionObjectTest2: prog.getName - " + prog.getName) // 작성한 코드가 나오는 이유는?
    console.log(prog.getName()) //

    if (prog.getName) {
        console.log("FunctionObjectTest2: prog.getName true")
    } else {
        console.log("FunctionObjectTest2: prog.getName false")
    }


    console.log("FunctionObjectTest2: prog.toString - " + prog.toString)
    console.log(prog.toString()) // toString() - 문자열을 반환하는 object의 대표적인 방법

    if (prog.toString) {
        console.log("FunctionObjectTest2: prog.toString true")
    } else {
        console.log("FunctionObjectTest2: prog.toString false")
    }

    console.log("FunctionObjectTest2: prog.name2 - " + prog.name2)


    // 자바스크립트에서 없는 것은 결국 undefined로 false로 처리됨

    if (prog.name2) {
        console.log("FunctionObjectTest2: prog.name2 true")
    } else {
        console.log("FunctionObjectTest2: prog.name2 false")
    }

    console.log("FunctionObjectTest2: prog.getName2 - " + prog.getName2)


    if (prog.getName2) {
        console.log("FunctionObjectTest2: prog.getName2 true")
    } else {
        console.log("FunctionObjectTest2: prog.getName2 false")
    }


    // ~~ in 객체에서 잡히고
    // hasOwnProperty에서 거짓이 나오면 필요에 의해 새로 추가한 객체
    // 양쪽 모두에서 잡히면 원래부터 가지고 있던 순수한 속성
    console.log("FunctionObjectTest2: " + ("name" in prog))
    console.log("FunctionObjectTest2: " + ("students" in prog))
    console.log("FunctionObjectTest2: " + ("getName" in prog))
    console.log("FunctionObjectTest2: " + ("name2" in prog))

    console.log("FunctionObjectTest2 : " + (prog.hasOwnProperty("students")))
    console.log("FunctionObjectTest2 : " + (prog.hasOwnProperty("getName"))) // 프로토타입 체인이라 확인 하지 않아 false
    console.log("FunctionObjectTest2 : " + ("toString" in prog))
    console.log("FunctionObjectTest2 : " + (prog.hasOwnProperty("toString"))) // 해당 객체에서 직접 선언 하지 않아 false


    return (
        <div className="FunctionObjectTest2">
            <p>
                FunctionObjectTest2
            </p>
        </div>
    )
}

export default FunctionObjectTest2