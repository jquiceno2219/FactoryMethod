/* 
Let's say I have a class to create an Instrument object. Now, there are several types of instruments: Stringed, wind and percussion.

All instrument objects require a name, brand, year, electronic or accoustic. And a method: interpret()

However, we will introduce differences between types.

Stringed intruments will have a field: numberOfStrings, and use: interpret(pluck)
Wind will use: interpret(blow)
Percussion will use: interpret(hit)
*/

// Interface
class Instrument {
    constructor(name, brand, year) {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }

    interpret() {
        throw new Error("This method must be overwritten");
    }
}

//Concrete implementation A
class StringedInstrument extends Instrument {
    constructor(name, brand, year, numberOfStrings) {
        super(name, brand, year);
        this.numberOfStrings = numberOfStrings;
      }

    interpret() {
        console.log("Plucking", this.name);
    }
}

//Concrete implementation B
class WindInstrument extends Instrument {
    interpret() {
        console.log("Blowing", this.name);
    }
}

//Concrete implementation C
class PercussionInstrument extends Instrument {
    interpret() {
        console.log("Hitting", this.name);
    }
}

class InstrumentCreator {
    createInstrument() {
    throw new Error('Factory method must be overridden');
    }

    displayInstrument() {
        const instrument = this.createInstrument();
        instrument.interpret();
      }
}

// Concrete creator class for Stringed instruments
class StringedInstrumentCreator extends InstrumentCreator {
    createInstrument() {
      return new StringedInstrument('Guitar', 'Gibson', 2023, 6);
    }
}
  
// Concrete creator class for Wind instruments
class WindInstrumentCreator extends InstrumentCreator {
   createInstrument() {
      return new WindInstrument('Red Flute', 'Yamaha', 2024);
    }
}
  
// Concrete creator class for Percussion instruments
class PercussionInstrumentCreator extends InstrumentCreator {
    createInstrument() {
      return new PercussionInstrument('Electric Drum', 'Pearl', 2022);
    }
}
  
// Display instruments in terminal
const stringedCreator = new StringedInstrumentCreator();
stringedCreator.displayInstrument();
  
const windCreator = new WindInstrumentCreator();
windCreator.displayInstrument();
  
const percussionCreator = new PercussionInstrumentCreator();
percussionCreator.displayInstrument();