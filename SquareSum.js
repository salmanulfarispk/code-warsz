
//Q.omplete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 



function squareSum(numbers){
  
    const dass=numbers.reduce((acc,curr)=>{
        return curr**2+acc;
      
    },0)
    return dass
  }
  console.log(squareSum([1, 2, 2]))
  