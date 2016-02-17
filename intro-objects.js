// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.




var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]


var getFullNames = function (object) {
    var stringArray =[]
    for (var i = 0; i < 4; i++) {
    var fullName = (object[i].first + " " + object[i].last)
    stringArray.push(fullName)
}
return stringArray
}


console.assert(getFullNames(customers)[1] === "John Smith")


// Part 2

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

var text = "It’s obviously not the case, but T’Challa—the Black Panther and mythical ruler of Wakanda—has always struck as the product of the black nationalist dream, a walking revocation of white supremacist myth. T’Challa isn’t just a superhero in the physical sense, he is one of the smartest people in the world, ruling the most advanced civilization on the planet. Wakanda’s status as ever-independent seems to eerily parallel Ethiopia’s history as well as its place in the broader black imagination. Maybe it’s only me, but I can’t read Jason Aaron’s superb “See Wakanda And Die” and not think of Adowa.\
Comic book creators, like all story-tellers, get great mileage out of myth and history. But given the society we live in, some people’s myths are privileged over others. Some of that is changing, no doubt. In the more recent incarnations of T’Challa you can see Christopher Priest invoking the language of the Hausa or Reginald Hudlin employing the legacy of colonialism. These were shrewd artistic decisions, rooted in the fact that anyone writing Black Panther enjoys an immediate, if paradoxical, advantage: the black diaspora is terra incognita for much of the world. What does the broader world really know of Adowa? Of Nanny and Cudjoe? Of the Maji-Maji rebellion? Of Legba and Oshun?  Of Shine? Of High John The Conqueror? T’Challa’s writers have always enjoyed access to a rich and under-utilized pool of allusion and invocation."

var getCounts =  function() {
var text = "It’s obviously not the case, but T’Challa—the Black Panther and mythical ruler of Wakanda—has always struck as the product of the black nationalist dream, a walking revocation of white supremacist myth. T’Challa isn’t just a superhero in the physical sense, he is one of the smartest people in the world, ruling the most advanced civilization on the planet. Wakanda’s status as ever-independent seems to eerily parallel Ethiopia’s history as well as its place in the broader black imagination. Maybe it’s only me, but I can’t read Jason Aaron’s superb “See Wakanda And Die” and not think of Adowa.\
Comic book creators, like all story-tellers, get great mileage out of myth and history. But given the society we live in, some people’s myths are privileged over others. Some of that is changing, no doubt. In the more recent incarnations of T’Challa you can see Christopher Priest invoking the language of the Hausa or Reginald Hudlin employing the legacy of colonialism. These were shrewd artistic decisions, rooted in the fact that anyone writing Black Panther enjoys an immediate, if paradoxical, advantage: the black diaspora is terra incognita for much of the world. What does the broader world really know of Adowa? Of Nanny and Cudjoe? Of the Maji-Maji rebellion? Of Legba and Oshun?  Of Shine? Of High John The Conqueror? T’Challa’s writers have always enjoyed access to a rich and under-utilized pool of allusion and invocation."

var obj = {}
var wordsArray = []
var lowerCase = text.toLowerCase()
var wordsArray = lowerCase.split(" ")
for (var i = 0; i < wordsArray.length; i++) {
    var word= wordsArray[i]
    obj[word] = 0
}
for(var i = 0; i < wordsArray.length; i++) {
    var word = wordsArray[i]
    obj[word] = obj[word] + 1
    }
    return obj
}



var wordFrequencyObject = getCounts(text)


console.assert(wordFrequencyObject.but === 3)
console.assert(wordFrequencyObject.black === 5)


// Part 3

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. It should have a 
// speak() method that receives a string as input and returns a new version of that 
// string where the first letter of every word is replaced with the letter 'r'.

var inputString ="i love you"


var replaceR = function(inputString) {
    var lowerCase = inputString.toLowerCase()
    var splitResult = lowerCase.split(" ")
    var newString = ""
    for  (var any in splitResult) {
    var word = splitResult[any]
    var newWord = "r" + word.substr(1,word.length-1)
    newString = newString + newWord + " "
     }
    return newString   
}

var generateDog = function(inputLegs, inputWeight, inputColor) {
    this.legs = inputLegs,
    this.weight = inputWeight,
    this.color = inputColor,
    this.speak =  function(input) {
        return replaceR(input)
    }
}



var dog = new generateDog(4, 10, 'red') 


console.assert(dog.legs === 4)
console.assert(dog.speak('i love you') === 'r rove rou')


// Part 4 

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.


// tests
// ---
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]



var pluck = function(inputArr, property) {
    var objectArr = []
    var nameArr = []
    for (var any in inputArr) {
        var value = inputArr[any]
        objectArr.push(value)
    }
        for (var i = 0; i < objectArr.length; i ++) {
        var nameValue = objectArr[i][property] 
        nameArr.push(nameValue) 
        }
    return nameArr  
}


console.assert(pluck(stooges, 'name')[0] === 'moe')
console.assert(pluck(stooges, 'age')[2] === 60)


// Part 5

// Write a function reverseObjects that takes an array of objects as input
// and returns an array of those same objects, but with the properties and 
// values reversed.



var users = [{obama: 'president@gmail.com'},{trump: 'americamoneywin@yahoo.com'},{bush: 'jeb!@hotmail.com'}]



var newObj = function(obj,key,val){
    obj[key] = val
    return obj
}

   var reverseObjects = function(array) { 
    var newestObj = {}
    for (var i = 0; i < array.length; i ++) {
        var obj = array[i]
    for (var any in obj) {
    var property = obj[any]
    var value = any
newObj(newestObj, property, any)
    }
return newestObj
    }
    }
   

var flippedUsers = reverseObjects(users)

console.assert(flippedUsers['president@gmail.com'] === 'obama')
console.assert(flippedUsers['americamoneywin@yahoo.com'] === 'trump')

// Part 6

// The code below doesn't work. Can you fix it?

var makeItTom = function(object) {
	for (var prop in object) {
		if (prop === 'name') object.prop = 'Tom'
	}
	return object
}

var sampleObject = {
	mass: '5.972 × 10^24 kg',
	age: '4.543 billion years',
	name: 'Earth'
}

var planetTom = makeItTom(sampleObject)



var makeItTom = function(object) {
    object.name = 'Tom'
    return object
}

var sampleObject = {
    mass: '5.972 × 10^24 kg',
    age: '4.543 billion years',
    name: 'Earth'
}

var planetTom = makeItTom(sampleObject)


console.assert(planetTom.name === 'Tom')

// VVV caution: hints below VVV

console.assert(planetTom['name'] === 'Tom')
console.assert(planetTom.prop === undefined)
console.assert(planetTom['prop'] === undefined)

// What did you learn about the difference between
// bracket syntax and dot syntax for object attributes?


// Part 7
// -----------
// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions.
// -----------


var meetsCriteria = function(obj,criteriaObject) {
    for (var property in criteriaObject) {
        if (criteriaObject[property] !== obj[property]) {
               return false
        }
    }
    return true
}



var where = function(objArray,criteria) {
    var outputArray = []
    for (var i = 0; i < objArray.length; i ++) {
        var obj = objArray[i]
        if (meetsCriteria(obj,criteria)) {
            outputArray.push(obj)   
        }
    }
    return outputArray
}



var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]


var sh8spr = where(plays, {author: "Shakespeare"})
console.assert(sh8spr instanceof Array)
console.assert(sh8spr.length === 5)
console.assert(sh8spr[0].title === "Cymbeline")

sh8spr = where(plays, {author: "Shakespeare", year: 1611})
console.assert(sh8spr.length === 0)

sh8spr = where(plays, {author: "Shakespeare", year: 1623})
console.assert(sh8spr.length === 2)

var midcentury = where(plays, {year: 1949})
console.assert(midcentury.length === 2)


// Part 8

// Create an object that has a name attribute and a method called personalize. 
// personalize should take a function as input. when personalize is called, 
// an introductory string should be inserted before the input function's
// return value. Use the example in the console.assert to understand
// exactly how you should write the method. Including the period! 

var politeObject = {
    name: "Frank"
}

var helloWorld = function() {
    return "hello world"
}


var newObject = function(inputName) {
    this.name = inputName,
    this.personalize = function(inputFunction) {
    var resultString = "Hi, my name is " + inputName + " , and the \ result is " + inputFunction() + "."
    return resultString
}
}

var politeObject = new newObject("Frank")


var personalizedResult = politeObject.personalize(helloWorld)

console.assert(personalizedResult === "Hi, my name is Frank, and the \
    result is hello world.")