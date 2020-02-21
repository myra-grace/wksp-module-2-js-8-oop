// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Simaese cat...

class Cat {
    constructor(name, breed) {
        this.name = name; 
        this.breed = breed
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

let boots = new Cat('boots', 'Simaese');
console.log(boots);

// Cat {name: "boots", breed: "Simaese", species: "feline"}