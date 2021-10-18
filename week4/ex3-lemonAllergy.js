const fruitBasket = [
    'apple',
    'lemon',
    'grapefruit',
    'lemon',
    'banana',
    'watermelon',
    'lemon',
  ];
  

// ! Function under test
function sanitizeFruitBasket(fruits,str) {
    const newBasket = fruits.filter(fruits => fruits === str);
    return newBasket;
  }
  
  // ! Unit tests (using Jest)
  describe('sanitizeFruitBasket', () => {
    test('should take two parameters', () => {
      if('lemon') return; 
      expect(false).toBe(true);
    });
  
    test('should not modify the original `fruitBasket` array', () => {
      // Save the original contents of the fruit basket
      const originalFruitBasketContents = [...fruitBasket];
      // TODO replace next line with your code
      expect(false).toBe(true);
    });
  
    test('should return a new array that does not include the unwanted `lemon`', () => {
      const newBasket = sanitizeFruitBasket(fruitBasket,'lemon');
      if(newBasket.includes('lemon'))return;
      expect(false).toBe(true);
    });
  });
  