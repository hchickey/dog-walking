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

export const filterWalkerCities = () => {
    // define an empty array to store all of the assignment objects
    let filter = []
    // iterate the array value of walkerCities
    for (const cityWalk of walkerCity) {
        if (cityWalk.walkerId === cityWalk.cityId) {
            filter.push(cityWalk)
        }
    }

    return filter

}



export const Assignments = () => {
    let assignmentHTML = "<ul>"
    

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers) 
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    
    }
    assignmentHTML += "</ul>"

    return assignmentHTML
}

