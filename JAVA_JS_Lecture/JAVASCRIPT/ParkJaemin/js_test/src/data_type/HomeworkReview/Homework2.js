const Homework2 = () => {
    const START = 1;
    const END = 20;


    for (var i = START; i <= END; i++) {
        if(!(i % 2)){ // i값을 2로 나눌때 떨어진다면 ㅡ> i % 2 ==0
            console.log("Homework2 : " + i)
        }
    }

    return (
        <div className="Homework2">
            <p>

                Homework2 Works Fine!

            </p>

        </div>
    )

}

export default Homework2