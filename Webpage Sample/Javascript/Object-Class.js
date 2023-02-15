
const User = require ("./CLASSES");

const marc = new User("Marc", "marknader1998@gmail.com");

console.log(marc.getInfo());

marc.Enroll("Bootstrap course");
marc.Enroll("Python course");

console.log(marc.getCourseList());
