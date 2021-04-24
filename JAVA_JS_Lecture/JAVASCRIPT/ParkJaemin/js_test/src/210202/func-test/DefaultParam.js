const DefaultParam = () => {
    const defParam = (first, second = 3) => {
        return first + second
    }

    let sum = defParam(1, 2)

    console.log(sum)

    sum = defParam(1) //Second 값이 없으면 defParam second 의 인자 = 3을 디폴트값으로 하여 리턴 값 합산 후 sum에 대입

    console.log(sum)


    return (
        <div className="DefaultParam">
            <p>
                DefaultParam
            </p>
        </div>
    )
}

export default DefaultParam