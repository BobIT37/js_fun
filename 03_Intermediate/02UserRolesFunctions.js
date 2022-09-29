/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create. delete courses
testprep - with access to create/delete courses
user - consume all content
other - trial user

Input: getUserRole(name, role)
*/

function getUserRole(name, role){

    switch (role) {
        case "Admin":
            return `${name} is admin with all access`
            break; //this is not necessary
        case "Sub-admin":
            return `${name} is sub-admin with access to create/delete courses`
            break;
        case "Testprep":
            return `${name} is testprep with access to create/delete courses`
            break; 
        case "user":
            return `${name} is user consume all content`
            break;     
        default:
            return `${name} is trial user`
            break;
    }
}

let userInfo = getUserRole("bob", "Testprep");

console.log(userInfo);

//Second option

let getUserRole1 = function (name, role){

    switch (role) {
        case "Admin":
            return `${name} is admin with all access`
            break; //this is not necessary
        case "Sub-admin":
            return `${name} is sub-admin with access to create/delete courses`
            break;
        case "Testprep":
            return `${name} is testprep with access to create/delete courses`
            break; 
        case "user":
            return `${name} is user consume all content`
            break;     
        default:
            return `${name} is trial user`
            break;
    }
}

console.log(getUserRole1("ilhan", "Admin"));