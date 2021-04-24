const SubOrderTest2 = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    var person1 = [
        {name: "Jaemin", age: 32},
        {name: "Alice", age: 23},
        {name: "Tomas", age: 30},
        {name: "Monica", age: 31},

    ]

    console.log("Before Custom Sort : " + JSON.stringify(person1)) // [OBJECT object]로 출력 객체 값 받으려면 JSON.stringfy

    person1.sort(function (a, b) {
            let x = a.name.toLowerCase() //소문자로 변환 후 어순 별로 정렬 // toLowerCase() 복습
            let y = b.name.toLowerCase()

            if (x < y) { // 오름차순 정렬
                return -1
            }
            if (x > y) {
                return 1
            }
            return 0
        }
    )


    console.log("After Custom Sort : " + JSON.stringify(person1))
    return (
        <div className="SubOrderTest2">
            <p>
                array-test : SubOrderTest2
            </p>
        </div>
    )
}
export default SubOrderTest2