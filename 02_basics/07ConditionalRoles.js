
//Create an appliction with following roles:
//admin - gets full access
//subadmin - get access to create/delete courses
//testprep - gets access to create / delete tests
//user - gets access to consume content

//Note only break is working

var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("get access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create / delete tests");
        break; 
    case "user":
        console.log("gets access to consume content");
        break;         
    default:
        console.log("Trial user")
        break;
}