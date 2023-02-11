class Vehicle {
    constructor (make,model,year) {
        this.make=make; 
        this.model=model;
        this.year=year ;
    }
    honk(){
        return 'beep';
    }
    toString(){
        return `the vehicle is a ${this.make} ${this.model} from ${this.year} `;
    }
}

class Car extends Vehicle {
    constructor (make,model,year){
        super(make,model,year);
        this.numWheels=4;
    }
}

class Motorcycle extends Vehicle {
   constructor (make,model,year){
    super(make,model,year);
    this.numWheels=2;
   }
   revEngine(){
    return 'VROOM!!!'
   }
}

class Garage {
    constructor (capacity){
        this.vechiles=[];
        this.capacity=capacity;

    }
  
    add(newVechile){
        if (!(newVechile instanceof Vehicle)){
            return 'only vechiles are allowed in here'
        }
        if (this.vechiles.length>=this.capacity){
            return 'sorry were full.'

        }
        else {
            this.vechiles.push(newVechile);
            return 'vechile added to garage'
        }
    }
}

