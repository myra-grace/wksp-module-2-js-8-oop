// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Create an object that represents a cat.
// It should have properties for tiredness, hunger, loneliness and happiness.
// You can set all of these properties to 0 by default.

class Cat {
    constructor(name) {
        this.name = name; 
        this.species = 'feline';
        this.energy = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
    energy = () => {
        this.energy = this.energy + 5;
    }  
    hunger = () => {
        this.hunger = this.hunger + 5;
    }
    loneliness = () => {
        this.loneliness = this.loneliness + 5;
    }
    happiness = () => {
        this.happiness = this.happiness + 5;
    }
        
}

// B) Instantiate a cat called 'boots' with the Cat class.
// ``  let boots = new Cat('boots');  ``
// ``  console.log(boots);  ``

// C) What do you see when you console.log(boots)?
//``  Cat {name: "boots", species: "feline"}  ``

// D) What if I want to output just boots' species?
// ``  let boots = new Cat('boots');  ``
//  ``  console.log(boots.species);  ``

// E) Boots' name is not part of its object.
//    Update the class above to accept have a name parameter
//    and pass Boots' name as an argument.
