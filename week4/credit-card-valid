//Check input characters count

function numCharacters(num){
    let input = num.toString().length; //toString() >> turns input to string and then .length 
    
   if(input == 16){
        return true;
   }else{  
    return false
   }      
}

//type of characters

function checkNumber(num){
     let regEx = '^[0-9]+$'; // JavaScript RegExp Reference  i read this site https://www.w3schools.com/Jsref/jsref_obj_regexp.asp
 
     if(num.match(regEx)){
          return true ;
     }else{
          return false
     }
}

//At least use 2 different number : if the first character of the input does not match to i it means we have rto different number so returns true 

function difNum(num){
     
     for(i=1 ; i<num.length; i++){// this loop means that go through numbers then we use an if to check if they match or not 
         if (num[0] !== num[i]) {
              return true; 
         } else{
              return false ;
         }
     }
}

//Input should be even

function evenNum (num){

     lastDigit = num % 10;
     if(lastDigit % 2 ==0){
          return true ;
     }else{
          return false;
     }
}

//The sum of digits >16

function   sum(num){
     let sumNum = 0;
     for (let i = 0 ; i < num.length ; i++){
          sumOfNumbers += parseInt(num[i]);  // i dont know what happens here but i know this loop through input and sum each digit :))
      } 
         
      if(sumOfNumbers > 16){
          return true;
      }else{ 
          return false
      }      
}
  
function validateCreditNumber(num){
     const answers = [] ; //?? 

     if( numCharacters(num) && checkNumber(num) && difNum(num) && evenNum (num) && sum(num)  == true){
          return `your number is valid` 
     }else{
          if (numCharacters(num) == false) {
               answers.push("Input must be 16 characters");
           } 
       
           if (checkNumber(num) == false) {
                answers.push("All characters must be numbers");
           }
       
           if (difNum(num) == false) {
               answers.push("At least two different numbers should be represented");
           }
       
           if (evenNum(num) == false) {
                answers.push("The last number must be even");
           } 
       
           if (sum(num) == false) {
                answers.push("The sum of all the numbers must be greater than 16");
           } 
   
          
           const x = answers.join('\n')
           return `Invalid Number \n ${x} `
     }  
}
     

console.log(validateCreditNumber("1234565675"))
