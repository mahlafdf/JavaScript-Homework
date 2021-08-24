'use strict';

function typeCheck(first,second) {
  if (typeof first == typeof second){
    console.log("SAME TYPE") ;
  } else{
    console.log("NOT THE SAME") ;
  }
}


var var1 = "This is my var1 ";

var var2 = "This is my var2";

var var3 = {
  color : "blue" ,
  opacity : 10 } ;

var var4 = {
  color: "red",
  opacity: 15};

/* idk */

if (typeof var1 == typeof var2 ){
  console.log("the same type");
} else{
  if( typeof var2 == typeof var3){
    console.log("the same type") ;
  }else{
    if
 
 /* this is not the solution i think*/   
    
    
    
    
    
    
    
    
  /*Masoud's answer*/  
    
console.log(var1 + " & " + var2);
  
typeCheck(var1, var2);

console.log(var1 + " & " + var3);
typeCheck(var1, var3);

console.log(var1 + " & " + var4);
typeCheck(var1, var4);

console.log(var2 + " & " + var3);
typeCheck(var2, var3);

console.log(var2 + " & " + var4);
typeCheck(var2, var4);

console.log(var3 + " & " + var4);
typeCheck(var3, var4);












