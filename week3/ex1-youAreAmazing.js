
function giveCompliment (your_name) {
    const compliments =[
        'great',
        'awesome',
        'good job',
        'bravo',
        'well done',
        'wonderful',
        'terrific',
        'cool',
        'good',
        'you got this man',
        'unbelievable'];

    let rand =compliments[Math.floor((Math.random()*compliments.length))];
    return 'You are '+ rand + ', ' + your_name +' !' ;
}


//call the function 
console.log(giveCompliment('Mahla'));
console.log(giveCompliment('Mahla'));
console.log(giveCompliment('Mahla'));
