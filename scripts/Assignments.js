import { getPets, getWalkers } from "./database.js"
import { getCities, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()
const walkerCity = getWalkerCities()

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}


// define a function that will get all the objects in walkerCities array that are for the walker that was clicked on

export const filterWalkerCities = (walker) => {
    // the function need the walker info so define a parameter
    // define an empty array to store all of the assignment objects
    let filter = ""
    // iterate the array value of walkerCities
    for (const cityWalk of walkerCity) {
        if (cityWalk.walkerId === walker.id) {
            for (const city of cities) {
                if (cityWalk.cityId === city.id) {
                    filter += `${city.name} and `
                }
            }
            
        }
    }
    let sliceWork = filter.slice(0, -5)
    return sliceWork

}
// define a function that builds a string of city names. Needs parameter for the filter array. 
// export const assignedCityNames = (filter) => {
// // Define an empty string that will get appended with matching cities
// let cityNames = ""

// //iterate the array of filter holding the citywalk objects
// for (const cityWalkers of filter) {
//     // for each object in filter, iterate the citties array to find the match
//     for (const city of cities) {
//         if (city.id === cityWalkers.cityId) {
//             //add the name of the matching city to the string of city names
//             cityNames = `${cityNames} and ${city.name}`
//         }
//     }
// }

//     return cityNames
// }



export const Assignments = () => {
    let assignmentHTML = "<ul>"
    

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers) 
        for( const walker of walkers) {
           if (currentPetWalker === walker) {
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${filterWalkerCities(walker)}
            </li>
        `
        }
    }
    }
    assignmentHTML += "</ul>"

    return assignmentHTML
}

