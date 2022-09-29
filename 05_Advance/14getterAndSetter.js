
var myCar = { 

    /* Properties */
    color: "blue", 
    make: "Toyota", 
    
    /* Getter methods */
    getColor: function() { 
	return this.color; 
    }, 
    getMake: function() { 
	return this.make; 
    },  

    /* Setter methods */
    setColor: function(newColor) {
        this.color = newColor;
    },
    setMake: function(newMake) {
	this.make = newMake;
    }
};

myCar.setColor("red");
myCar.setMake("Audi");

var color = myCar.getColor();
// red
console.log(color)

console.log(myCar.getMake());
// Audi

const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah

const teacher = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(teacher.firstName); // Monica

// accessing getter methods
console.log(teacher.getName); // Monica

// trying to access as a method
//console.log(teacher.getName()); // error