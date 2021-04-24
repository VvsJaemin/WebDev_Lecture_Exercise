const EQTest =() =>{
    let name = "test"
    // 값이 뭔가 있으면??? True
    if(name){
        console.log("EQTest ture")
    }else{
        console.log("EQTest false")
    }

    if(!name){ // "test"가 아니니깐 트
        console.log("EQTest (not) ture")
    }else{
        console.log("EQTest (not) false")
    }


    return(
        <div className="EQTest">

            <p>

                Equals Test

            </p>
        </div>
    )
}

export default EQTest