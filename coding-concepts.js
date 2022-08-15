// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
 console.log(cohort.split(""))

// a) Your answer: put each letter and number in qoute.
// b) Verify and explain: A string that identifies character or characters to use in separating the string. Split a string into substrings using the specified separator and return the as an array.



// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: student name Hello, LEARN Student
// b) Verify and explain:


// --------------------3) What will this log?

//const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain:multiplies each number in the string by 2. [8, 10, 12, 14, 16]


// --------------------4) What will this log?

//const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: output only odd numbers.


// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript" 
// b) Verify and explain: log only calls for language array and index 0.


// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Echo",
//     this.year = 2022
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: {student: "George, year: 2022"}
// b) Verify and explain: it supposed to give the entire object, but skipped cohort when running the test?
