function CountDigit(no)
{
    let iCount = 0;
    let iDigit = 0;
    
    while(no != 0)
    {
        iDigit = no % 10;
        iCount++;

        no = no/10;  // issues with '/' operator
    }

    return iCount;
}

function main()
{
    let iValue = 721;
    let iRet = 0;

    iRet = CountDigit(iValue);

    console.log(`${iValue} Contains ${iRet} Digits`);

}

main();