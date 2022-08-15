// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("mlt3", () => {
    // a test/it method that lists the name in the described block.
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        // an expect method nested within the test block calling on the hallo() function , followed by the . toEqual() matcher that 
        // checks the expected outcome of the function return. 
    }
        )
})
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

expect(mlt3(numbersArray1).toEqual([6, 7, 8, 9, 10]))

// error when run is mlt3 is not defined
// mult3 takes in an irray of numbers and returns an array with all the numbers multigplied by 3.
// Psuedocode 
// Declare a function named mult3
// Input: array of nambers
// output: array of numbers and returns an array with all the numbers multigplied by 3
// Returning same length are with numbers multilpied by 3

// b) Create the function that makes the test pass.
const mlt3 = (array) => {
    return array.map(value => value * 3)
}


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divEvenly", () => {
    // a test/it method that lists the name in the described block.
    it("takes in an object an an argument and decides if the number inside is evenly divisible by 3", () => {
        // an expect method nested within the test block calling on the hallo() function , followed by the . toEqual() matcher that 
        // checks the expected outcome of the function return. 
    }
        )
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

expect(divEvenly(object1).toEqual({15}))
expect(divEvenly(object2).toEqual({0}))
expect(divEvenly(object3).toEqual(-7))


// error when run is divEvenly is not defined
// divEvenly takes in an object of numbers
// Psuedocode 
// Declare a function named divEvenly
// Input: object of nambers
// output: object of numbers and returns if all the numbers in it are evenly divisibele by 3.
// Returning same length are with numbers multilpied by 3

// b) Create the function that makes the test pass.

const divEvenly = (number) => {
    return number.map(value => value / 3)

}
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capLetters", () => {
    // a test/it method that lists the name in the described block.
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        // an expect method nested within the test block calling on the hallo() function , followed by the . toEqual() matcher that 
        // checks the expected outcome of the function return. 
    }
        )
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

expect(capLetters(randomNouns1).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]))
expect(capLetters(randomNouns2).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]))


// error when run, capLetters is not defined
// capLetters takes in an arrraof  words and returns an array with all the words capitalized.
// Psuedocode 
// Declare a function named capLetters
// Input: array of workds
// output: array of words and returns an array with all the words capitalized.
// Returning same length are with numbers multilpied by 3


// b) Create the function that makes the test pass.
const capLetters = (string) => {
    return string.touperCase(value => value(""))
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    // a test/it method that lists the name in the described block.
    it("takes in a string and logs the index of the first vowel.", () => {
        // an expect method nested within the test block calling on the hallo() function , followed by the . toEqual() matcher that 
        // checks the expected outcome of the function return. 
    }
        )
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

expect(firstVowel(vowelTester1).toEqual(1))
expect(firstVowel(vowelTester2).toEqual(0))
expect(firstVowel(vowelTester3).toEqual(2))


// error when run firstVowel is not defined
// firstVowel takes in a string
// Psuedocode 
// Declare a function named firstVowel
// Input: string
// output: logs the index of first vowel.


// b) Create the function that makes the test pass.

const firstVowel = (index) => {
    return index.firstVowel(value => value(""))
}
