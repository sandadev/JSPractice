//creating array and adding values to array
let fruits=['apple','banana','orange'];

//removing first fruit
fruits.splice(0,1);

//adding fruit at end 
fruits.push('grape');

//updating 2 element 
fruits[1]='pear';

console.log(fruits);

// ---------------------------------------------------------------------------------
// creating and adding person object 

let person = {
    name: "John",
    age: 30,
    city: "New York"
}

// delete age property
delete person.age;

//adding new property 
person["job"]= "Engineer";

// updating the city value
person.city = "San Francisco";

console.log(person)


//---------------------------------------------------------------------------------------

// adding object to array 

let cars = [
{
    make: "Toyota",
    model: "Camry",
    year: 2018

},
{
    make: "Hyndai",
    model: "I20",
    year: 2012

},
{
    make: "KIA",
    model: "Sonet",
    year: 2020

}

];
//Remove the first car object from the "cars" array
cars.splice(0,1)

//Add a new car object to the "cars" array
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020

});

//Update the "model" property of the second car object

cars[1].model="Carnival"
console.log(cars);