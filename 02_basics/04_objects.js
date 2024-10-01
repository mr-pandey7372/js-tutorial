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
const obj5 = {5:"a", 6:"b"}


// const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2,obj5)    // merge the array obj2 into obj1 , giving '{}' is good practice
// console.log(obj4);

// use mostly spread operator ...
const obj6 = {...obj1, ...obj2, ...obj5}
// console.log(obj6);

 
const users = [                      // database representation
    {                                     // database representation
        id: 1,                               // database representation
        email : "h@gmail.com"                  // database representation  
    },                                      // database representation
    {                                         // database representation
    },                                     // database representation
    {                                // database representation
    },                               // database representation
    {                               // database representation
    },                            // database representation
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));     
// console.log(Object.entries(tinderUser));    // converts every key-value into arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // to check whether that the property is existing or not


// ************************************ De-Structuring ************************************ //
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructure: "hitesh"
}

// course.courseInstructure
// another way to extract the value
const {courseInstructure} = course       
console.log(courseInstructure);

const {courseInstructure:instructor} = course   // to shorten the name {courseInstructure: instructor}
console.log(instructor);


// ************************************ API ************************************ //

// In object format
// {
//     "name":"hitesh",
//     "coursename": "js hindi",             // in json keys and values are string
//     "price": "free"
// }

// In array format
[
    {},
    {},
    {}
]