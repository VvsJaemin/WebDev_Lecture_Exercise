function ClassObject() {
    class Obj {

    // 생성자를 constructor()로 사용해야한다.
        // 클래스는 호이스팅이 발생되지 않는다. cf.) 함수는 호이스팅이 발생 할 수 있다.
        constructor() {
            this.name = "test"
            this.major = "social welfare"
        }
    }

    let obj = new Obj() // 클래스 생성

    console.log("ClassObject : " + obj.name)
    console.log("ClassObject : "+ obj.major)

    return (
        <div className="ClassObject">
            <p>
                Class Test
            </p>
        </div>
    )
}

export default ClassObject