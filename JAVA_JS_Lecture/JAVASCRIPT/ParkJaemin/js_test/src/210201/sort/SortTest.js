const SortTest = () => {

    let arr = ["one", "two", "three"]

    console.log("arr : " + arr)

    let one = arr[0]
    let two = arr[1]
    let three = arr[2]

    console.log("one = " + one + ", two = " + two + ", three = " + three)

    arr = new Array("test1", "test2", "test3")

    console.log(arr)

    let len = arr.length

    console.log("Array Length = " + len)
    console.log("Last Arr = " + arr[len - 1])

    arr = [1, 9, 3, 12, 5, 8, 7]
    let arr2 = [1, 9, 3, 2, 5, 8, 7]

    console.log("Before Sort = " + arr)
    let sortedArr = arr.sort()
    console.log("After Sort = " + sortedArr) // 12를 문자열 12로 봤고 1이 앞에있으니 우선순위를 둠
//---------------------------------------------------------------
    console.log("Before Sort2 = " + arr2)
    let sortedArr2 = arr2.sort()
    console.log("After Sort2 = " + sortedArr2)
//-------------------------------------------------- arr 12순서 에러 고치는 코드
    // 배열에서 값을 끄집어내서 비교해보는 것
    // 값을 빼보면 그 차이가 가장 큰넘이 마지막이란 것을 알 수 있음
    console.log("(Solved)Before Sort = " + arr)
    sortedArr = arr.sort((a, b) => a - b) // 작은걸 우선순위로 둘 때 b-a
    console.log("(Solved)After Sort = " + sortedArr)
    len = sortedArr.length

    var text = "<ul>"
    for (var i = 0; i < len; i++) {
        text += "<li>" + sortedArr[i] + "</li>"
        //<ol> - orderd list = 숫자나 알파벳 등 순서가 있는 목록
        //<ul> - unordered list = 순서가 필요 없는 목록
        //<dl> - definition list = 사전처럼 용어를 설명하는 목록
        //<li> - <ol>과<ul>의 각 항목들을 나열 할 때 사용 list item의 약자

    }

    text += "</ul>"

    console.log("text = " + text)

    return (
        <div className="SortTest">
            <p>
                SortTest
            </p>
        </div>
    )
}

export default SortTest
