// Class code examples

const person1 = {
    firstName : "Chee Kean",
    weight : 231,
    height : 1.7
}

const person2 = {
    firstName : "Marco Santo",
    weight : 231,
    height: 1.7
}

const person3 = {
    firstName3: "Carlos Max",
    weight3: 231,
    height3: 1.7
}


const person4 = {
    firstName4: "Coroluna",
    weight4:  231,
    height4: 1.7
}


// Accessing a property with dot notation
console.log(
    person1.firstName,
    person1.weight
)
// Accesinng a property with bracket  notation (indirect access, or dinamic)
console.log(person1["weight"])

const personKey = ["firstName", "weigth", "heigth"]

for(key of personKey){
    console.log(`person1 ${key}: `, person1[key])
}

person1.nationality = "Italian"

console.log(person1.favFood)

person1["favFood"] = "pizza"

const newKey = `favourite Book`
person1[newKey] = "guide to galaxy"

console.log("person1:", person1)

// for (key in person1) console.log(person1[key])

for (let i = 0; i < Object.keys(person1).length; i++){
console.log(Object.keys(person1)[i])
}

const tween1 = {
    name: "Carlos",
    age: 24
}

const tween2 = {
    name: "Carlos",
    age: 24
}

console.log( 
    tween1 === tween2,
    "Carlos" === "Carlos")
