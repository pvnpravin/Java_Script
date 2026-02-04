
function CheckEvenOdd(no)
{
    if((no % 2) == 0)
    {
        console.log(no , "Is Even Number");
    }
    else
    {
        console.log(no , "Is Odd Number");
    }

}

function main()
{
    let iValue = 11;

    CheckEvenOdd(iValue);

}

main();