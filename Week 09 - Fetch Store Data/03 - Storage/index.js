/**
 * Local Storage
 */

localStorage.setItem('myDog', 'bernie');
console.log('Looking at Local Storage: ', localStorage.getItem('myDog'));

// To Clear specific item
//localStorage.removeItem('myDog');

/**
 * Session Storage
 */
sessionStorage.setItem('myDog', 'bernie thee Havanese');
console.log('Looking at Session Storage: ', sessionStorage.getItem('myDog'));

// To Clear specific item
//sessionStorage.removeItem('myDog');

//To Clear everything in session storage
//sessionStorage.clear();

/**
 * Cookies
 */
//expiration date is for session automatically
document.cookie = 'dog=bernie';
//have to provide entire date for it to take effect
document.cookie = 'food=tacos; expires=Fri, 21 Dec 2022 23:59:59 GMT';

// Gets ALL the cookies. YOU need to parse yourself
console.log(document.cookie);

// Delete Cookie - set expiration date to an already expired data
//document.cookie = 'dog=; expires=Fri, 21 Dec 2000 23:59:59 GMT';
//document.cookie = 'food=; expires=Fri, 21 Dec 2000 23:59:59 GMT;';
