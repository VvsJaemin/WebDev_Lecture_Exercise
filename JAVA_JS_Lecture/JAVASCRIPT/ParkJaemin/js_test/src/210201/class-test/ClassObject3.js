function ClassObject3() {
    class Obj {


        constructor() {
            this.name = "test"
            this.major = "social welfare"
        }

        getName() {
            return this.name
        }

        getMajor() {
            return this.major
        }

        setName(name) {
            this.name = name
        }

        setMajor(major) {
            this.major = major
        }

        display() {
            console.log("ClassObject3 : " + this.name)
            console.log("ClassObject3 : " + this.major)
        }

        static getStaticTest(isTest, number) {
            if (isTest) {
                return 333
            } else {
                // parseInt(숫자값, 표현하는 진법) -> (radix - 10진수로 표현)
                return parseInt(3.3 * number, 10)
            }
        }
    }

    let obj = new Obj() // 메모리관점에서 봐야함.

    console.log("ClassObject3 : " + obj.name)
    console.log("ClassObject3 : " + obj.major)
    console.log("ClassObject3 : " + obj.getName())
    console.log("ClassObject3 : " + obj.getMajor())

    obj.display()

    console.log(Obj.getStaticTest(true))
    console.log(Obj.getStaticTest(false, 100))

    return (
        <div className="ClassObject3">
            <p>
                Class Test3
            </p>
        </div>
    )
}

export default ClassObject3