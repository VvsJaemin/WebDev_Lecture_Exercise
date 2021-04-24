const SubOrderTest = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    var person1 = [
        {name: "Jaemin", age: 32},
        {name: "Alice", age: 23},
        {name: "Tomas", age: 30},
        {name: "Monica", age: 31},

    ]

    console.log("Before Custom Sort : " + JSON.stringify(person1)) // [OBJECT object]로 출력 시 객체 값 받아오기


    person1.sort
    ((a, b) => (a.age-b.age)) // 내림차순 나이 정렬


    console.log("After Custom Sort : " + JSON.stringify(person1))
    return (
        <div className="SubOrderTest">
            <p>
                array-test : SubOrderTest
            </p>
        </div>
    )
}
export default SubOrderTest