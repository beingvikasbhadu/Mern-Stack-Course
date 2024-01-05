/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor()
  {
    this.result=0.0;
  }
   add(n)
  {
    result+=n;
  }
  subtract(n)
  {
    result-=n;
  }
  divide(n)
  {
   result/=n;
  }
  multiply(n)
  {
    result*=n;
  }
  clear()
  {
    result=0;
  }
  getResult()
  {
    return result;
  }
  calculate(str)
  {
    let ans=0;
    let st=[]
    let i=0;
    while(i<str.length)
    {
      if(str[i]==' ')
       {i++;
        continue;}
      else
      {
        let ch=str[i].charCodeAt(0);
        if(str[i]=='(')
         {st.push('(');
         i++;
        }
        else
        if(ch>='0'.charCodeAt(0) && ch<='9'.charCodeAt(0))
         {
          st.push(ch-'0'.charCodeAt(0));
          i++;
         }
    
        
      }
    }
  }
}

module.exports = Calculator;
