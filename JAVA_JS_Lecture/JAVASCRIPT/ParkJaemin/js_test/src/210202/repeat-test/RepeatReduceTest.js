const RepeatReduceTest = () => {
    let seq = [1, 2, 3, 4, 5]
    let sum = seq.reduce(reduceFunc)

    function reduceFunc(total, value, value2) { //1~5까지의 합
        return total+value+value2
    }


    console.log("AfterReduce : " + sum)

    let testSum = seq.reduce(reduceFunc, 333, 10)
    console.log(testSum)

    return (
        <div className="RepeatReduceTest">
            <p>
                array-test : RepeatReduceTest
            </p>
        </div>
    )
}
export default RepeatReduceTest