const ArrowFunctionTest = () =>{
    let f = function (){return "33"}
    console.log("ArrowFunctionTest :" + f())

    // 일반 함수표현식과 ArrowFunction표현식의 차이를 보여

    let fArrow = () => {return "33"} //return 생략 불가능
    console.log("ArrowFunctionTest :" + fArrow())


    return(
        <div className="ArrowFunctionTest">
            <p>
                ArrowFunctionTest
            </p>
        </div>
    )
}

export default ArrowFunctionTest