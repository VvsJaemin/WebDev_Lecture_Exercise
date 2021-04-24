const LiteralTest =() =>{
    let str1 = '4*1=3'

    console.log(str1) // 문자열 출력

    let first =3
    let second =7

    //URL 생성시 아주 유용하다.
    //localhost:777/register
    //localhost:777/manage

    let str2 = `${first} * ${second} = ???`
    //

    // Q.console.log('%d, %s') 모두 가능한데 필요한가요?
    // A.데이터 출력이 아니라 입력이나 가공하는데 유용
    console.log(str2)

    return(
        <div className="LiteralTest">

            <p>

                Literal Test

            </p>
        </div>
    )
}

export default LiteralTest