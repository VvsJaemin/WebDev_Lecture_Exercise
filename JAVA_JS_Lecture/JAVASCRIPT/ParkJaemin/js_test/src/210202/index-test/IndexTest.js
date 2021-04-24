const IndexTest = () => {
    let vendors = ["ti", "stm", "adi", "nvidia", "qualcomm", "xilinx", "amd", "nxp", "freescale", "infineon",
        "xilinx", "amd", "nxp", "freescale", "infineon"]
    let lastIdx = vendors.lastIndexOf("freescale")



    console.log(vendors)
    console.log("Where is it? = "  + lastIdx) //freescale의 배열이 몇 번째 배열에 있는지?

    let idx = vendors.indexOf("freescale")

    console.log("Where is it? = "  + idx) // freescale(문자열) 중복 시 가장 가까운 곳에 있는 배열이 몇번째 있는지?



    return (
        <div className="IndexTest">
            <p>
                array-test : IndexTest
            </p>
        </div>
    )
}
export default IndexTest