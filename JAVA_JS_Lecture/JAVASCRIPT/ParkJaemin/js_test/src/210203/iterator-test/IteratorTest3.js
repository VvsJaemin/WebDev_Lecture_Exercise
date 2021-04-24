class IteratorManager {
    constructor() {
        this.itrData = [] // 배열 초기
    }

    add(data) {
        this.itrData.push(data) //data push
    }

    [Symbol.iterator]() {
        return this.itrData.values() // value값 리턴

    }
}

const IteratorTest3 = () => {
  let iterMgr = new IteratorManager() //클래스의 있는 객체 사용
    iterMgr.add("three")
    iterMgr.add("seven")
    iterMgr.add("nine")

    for(let entry of iterMgr){
        console.log(entry)
    }


    return (
        <div className="IteratorTest3">
            <p>
                IteratorTest3
            </p>
        </div>
    )
}

export default IteratorTest3