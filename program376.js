// Arrithmatic class :=> Addition Sub

class Arithmatic
{
  
   constructor(A,B)  // Parameterised
  {
    this.No1 = A;
    this.No2 = B;

    console.log("Inside Parameterised Constructor");

  }
  
  Addition() 
  {
    return this.No1 + this.No2;
  }

  Substraction() 
  {
    return this.No1 - this.No2;
  }
}

function main()
{
  
  let obj = new Arithmatic(11,10);
  let iRet = 0;

  iRet = obj.Addition();
  console.log("Addition is : ", iRet);

  
  iRet = obj.Substraction();
  console.log("Substraction is : ", iRet);

  
}

main();