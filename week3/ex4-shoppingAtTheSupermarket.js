const shoppingCard =['banana','milk'];

function addToShoppingCard(add){
    if(shoppingCard.length<=2){
        shoppingCard.push(add);
    }else{
        shoppingCard.shift();
        shoppingCard.push(add);
    }
    const shoppingCardString = shoppingCard.join(',');
    return `you bought ${shoppingCardString}!`;
}

console.log(addToShoppingCard('honey'));
console.log(addToShoppingCard('coffee'));
console.log(addToShoppingCard('chips'));

