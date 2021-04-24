function ClassObject2() {
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
            console.log("ClassObject2 : " + this.name)
            console.log("ClassObject2 : " + this.major)
        }
    }

    let obj = new Obj()

    console.log("ClassObject2 : " + obj.name)
    console.log("ClassObject2 : " + obj.major)
    console.log("ClassObject2 : " + obj.getName())
    console.log("ClassObject2 : " + obj.getMajor())

    obj.display()

    return (
        <div className="ClassObject2">
            <p>
                Class Test2
            </p>
        </div>
    )
}

export default ClassObject2