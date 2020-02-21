class Dog {
    constructor() {
        this.hunger = 0;
    }
    
    remaining = () => {
        console.log(this.food.amount) //error cause food & amount don't exist
    }
 }

 let fido = new Dog();
 fido.remaining();