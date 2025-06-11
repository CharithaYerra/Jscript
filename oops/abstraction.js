class Car {
    #engineStarted = false;
    #fuel = 0; 

    addFuel(liters) {
        if (liters > 0) {
            this.#fuel += liters;
            console.log(`Added ${liters}L fuel`);
        }
    }

    startEngine() {
        if (this.#fuel > 0) {
            this.#engineStarted = true;
            console.log("Engine started ");
        } else {
            console.log("Cannot start. Please add fuel ⛽");
        }
    }

    drive() {
        if (this.#engineStarted) {
            console.log("Driving...");
        } else {
            console.log("Start the engine first.");
        }
    }
}



const myCar = new Car();

myCar.drive();          //  Start the engine first.
myCar.startEngine();    //  Cannot start. Please add fuel ⛽
myCar.addFuel(10);      //  Fuel added
myCar.startEngine();    //  Engine started
myCar.drive();          //  Driving...
