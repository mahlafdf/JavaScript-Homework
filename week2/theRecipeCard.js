let myMealRecipe = {};

myMealRecipe = {
    title:'Coffe with milk',
    Servings:1,
    Ingredients:['milk 1','coffee 2','sugar 0.2','syrup']
}

// use Masoud's code >> using for

let propertyCaption = ['Meal name','Serves','Ingredients'] ;
let myMealRecipeArray = Object.values(myMealRecipe);
let ingredientsFinal = "" ,

for (let i = 0; i < propertyCaption.length ; i++) {
    console.log(propertyCaption[i] + ": " + myMealRecipeArray[i]); 
}    


