// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.



// B) Make Boots wait 20 minutes and call then console.log(boots);

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
    wait20Handler = (minutes) => {
        this.tirednessHandler += minutes;
        this.hungerHandler += minutes;
        this.lonelinessHandler += minutes;
        this.eatHandler += minutes;
    }
}

let boots = new Cat('boots', 'Simaese');
boots.playHandler(4);
console.log(boots);