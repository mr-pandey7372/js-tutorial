// non singleton object
const tinderUser1 = {}

// singleton object
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fristname: "Abhimanyu",
            lastname: "Pandey"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);  // to access in depth user dot(.) operator and access.

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

