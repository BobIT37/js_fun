// import User from "./12classjs";

const User = require("./12classjs.js");

const hitesh = new User("Bob", "bob@loop.dev");

console.log(hitesh.getInfo());
hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

console.log(hitesh.getCourseList());

let courses = hitesh.getCourseList();

courses.forEach((c) => console.log(c));
