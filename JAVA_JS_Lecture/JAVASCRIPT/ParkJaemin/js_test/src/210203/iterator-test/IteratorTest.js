class IteratorManager{
    constructor() { //클래스 생성
        this.itrData = [] // 배열 초기화
    }
    add(data){
        this.itrData.push(data) //data push
    }
    [Symbol.iterator](){
        return this.itrData.values() // value값 리턴

    }
}

const IteratorTest = () => {
    let iterData = ["one", "two", "three"]

    for(let entry of iterData){
        console.log(entry)
    }

    let varData = ["four", "five", "six"]

    let itr = varData[Symbol.iterator]()

    console.log(itr.next())
    console.log(itr.next())
    console.log(itr.next()) // 값이 있으면 done은 false
    console.log(itr.next()) // 값이 없으니 value는 undefined // done은 true
    // value랑 done은 반대로 나타난다.

    let varItr = varData.values() // 심볼 미사용

    console.log(varItr.next())
    console.log(varItr.next())
    console.log(varItr.next())
    console.log(varItr.next())

    return (
        <div className="IteratorTest">
            <p>
                IteratorTest
            </p>
        </div>
    )
}

export default IteratorTest