const cartForParty = {
    "chips" : 1.75,
    "beers": 2, 
    "coffee" :5.35,
    "drinks": 6,
    "soda" : 0.53
};



function calculateTotalPrice (card){
    let totalPrice = 0;
    for (let property in card){
        totalPrice += card[property];
    }
    return`Total: \u20ac${totalPrice}`;
}

console.log(calculateTotalPrice(cartForParty));