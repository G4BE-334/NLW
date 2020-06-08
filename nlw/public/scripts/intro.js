// Comments

// document.write("Hello, World!")

// Variables, data types
var myvar = "Hello World!"
document.write("<p>" + myvar)

// Constants
const myconst = "What's up Folks"

document.write("<p>" + myconst)

// Objects
const pessoa = {
  altura: "1,80m",
  idade: 24,
  solteiro: true,
  correr() {
    return "Keep moving forward"
  }
}

document.write("<p>" + pessoa.correr())

// Arrays
const array = ["blue", "green", "red"]

document.write("<p>" + array[0] + "<\p>")

// Functions
function sayMyName() {
  document.write("Gabe")
}
// Or
function sayNames(name) {
  document.write(name)
}
sayMyName()
sayNames("Miguel")
sayNames("Gordim")

// Condition statements
const grade = 6
if (grade >= 7) {
  document.write("Passed")
}
else {
  document.write("<p>Failed")
}

// Loops
for (i=0; i<10; i++) {
  document.write(`<p> ${i}`)
}