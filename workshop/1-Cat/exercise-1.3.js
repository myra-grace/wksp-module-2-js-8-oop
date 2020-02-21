// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

class Cat {
    constructor(name, breed) {
        this.name = name; 
        this.breed = breed
        this.species = 'feline';
        this.tiredness = 100;
        this.hunger = 0;
        this.loneliness = 100;
        this.happiness = 0;
    }
    tirednessHandler = (energy) => {
        this.tirednessHandler -= energy;
    }  
    hungerHandler = (ate) => {
        this.hungerHandler += ate;
    }
    lonelinessHandler = (minutes) => {
        this.lonelinessHandler -= minutes;
    }

    sleepHandler = (hours) => {
        const energy = hours*5;
        this.tirednessHandler(energy); 
        this.happiness += 5;
    }
    eatHandler = (foodGrams) => {
        const ate = foodGrams /5;
        this.hungerHandler(ate);
        this.happiness += 5;
    } // subtracts 1/5
    playHandler = (minutes) => {
        const played = minutes *3;
        this.lonelinessHandler(played);
        this.happiness += 10;
    }
}

let boots = new Cat('boots', 'Simaese');
boots.playHandler(4);
console.log(boots);