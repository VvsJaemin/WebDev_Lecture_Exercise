const Homework1 = () => {
    const START = 1;
    const END = 10;


    for (var i = START; i <= END; i++) { // 1부터 10까지 for문 실행
        console.log("Homework1 : " + i)
    }

    return (
        <div className="Homework1">
            <p>

                Homework1 Works Fine!

            </p>

        </div>
    )

}

export default Homework1