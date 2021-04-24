function ObjectTest2() {
    let obj = {
        _name: "test",

        get name() {
            console.log("I'm Getter")
            return this._name
        },

        set name(value) {
            console.log("I'm Setter")
            return this._name = value
        }
    }

    console.log("ObjectTest2 : " + obj.name) //  get name을 통해 겟터ㅡ> 리턴값인 this._name = 'test')
    console.log("ObjectTest2 : " + obj._name)

    obj.name = "gogosing"
    console.log(obj.name)

    return (
        <div className="ObjectTest2">
            <p>
                ObjectTest2
            </p>
        </div>
    )
}
export default ObjectTest2