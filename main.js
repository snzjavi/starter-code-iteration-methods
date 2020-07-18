// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.


// Append the katas to this element:
const main = document.querySelector('main')
const isActive = users.filter(user => user.isActive === true)

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}



console.log (users)

// Kata 0: An example kata
// Filter the users array to show only the users with an eyeColor property of "green".

const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes2) 


// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.
const isActiveUsers = users.filter(function (index) {
    return index.isActive === true 
    
})
printKata(1, isActiveUsers) 

// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.
const emailUsers = users.map(iteration => iteration.email)
printKata(2, emailUsers)

// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".
const companyUsers = users.some(function (index){
    return index.company === "OVATION"
}) 
printKata(3,companyUsers)

// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.
const userAge38 = users.find(function (index){
    return index.age >= 38
})
printKata(4, userAge38)

// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.

const firstUserOver38 = users.filter(index => index.isActive === true).find(index => index.age >= 38)
printKata(5, firstUserOver38)

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.

const zencoBalanceUsers = users.filter(index => index.company === "ZENCO").map(index => index.balance)
printKata(6,zencoBalanceUsers)

// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.


const fugiatUsers = users.filter(index => index.tags.includes("fugiat")).map(index => index.age)
printKata(7,fugiatUsers)