var data = [
    {
        principal : 2500,
        time : 1.8,
    },
    {
        principal : 1000,
        time : 5,
    },
    {
        principal : 3000,
        time : 1,
    },
    {
        principal : 2000,
        time : 3,
    }
];
var solve;
data.forEach(num);

function num(interestCalculator){
    if(interestCalculator.principal >= 2500 && interestCalculator.time > 1 && interestCalculator.time < 3){
        interestCalculator.rate = 3;
        interestCalculator.interest = interestCalculator.principal * interestCalculator.time * interestCalculator.rate/100  
     }
     else if(interestCalculator.principal >= 2500 && interestCalculator.time >= 3){
        interestCalculator.rate = 4;
        interestCalculator.interest = interestCalculator.principal * interestCalculator.time * interestCalculator.rate/100

    }
    else if(interestCalculator.principal < 2500 || interestCalculator.time <= 1){
        interestCalculator.rate = 2;
        interestCalculator.interest = interestCalculator.principal * interestCalculator.time * interestCalculator.rate/100
    }
    else{
        interestCalculator.rate = 1;
        interestCalculator.interest = interestCalculator.principal * interestCalculator.time * interestCalculator.rate/100  
       }
    console.log(interestCalculator.interest)
}
function interestData(principal, rate, time){
    return principal *time *rate/100
  }


console.log(data)
